import {useCollection} from "components/hooks/useCollection";
import {useMemo} from "react";
import {getDifferenceInDays} from "../../service/helpers/date";
import { Flight, Fare} from "../../service/clients";

export type DestinationData = {
  destination: string;
  oneWayFares: Fare[];
  returnFares: Fare[][] ;
  price: number,
  currency: string;
}

export type OriginData = {
  origin: string;
  destinations: DestinationData[]
}

type UseFlightsParams = {
  origins: string[];
  oneWay?: boolean;
  maxPrice?: number;
  daysBetweenFrom?: number;
  daysBetweenTo?: number;
}


function getOneWayFlights(flights: Flight[], params: UseFlightsParams): OriginData[] {
  return params.origins.map((origin) => ({
    origin,
    destinations: flights
      .filter((flight) => flight.origin === origin)
      .map((flight) => {
        const { destination } = flight;
        const fares = flight.fares
          .filter((fare) => fare.price <= (params.maxPrice || Infinity))
          .sort((fare1, fare2) => fare1.price - fare2.price)

        const { price = Infinity, currency = ''} = fares?.[0] || {}

        return {
          destination,
          oneWayFares: fares,
          returnFares: [],
          price,
          currency
        }
      }).sort((destination1, destination2) => {
        return destination1.price - destination2.price;
      })
  }))
}

function getFaresGroups(
  outboundFares: Fare[],
  inboundFares: Fare[],
  maxPrice: number = 10_000,
  daysBetweenFrom: number = 0,
  daysBetweenTo: number = 365
) {
  const fareGroups = [];

  for (let i = 0; i < outboundFares.length; i++) {
    for (let j = 0; j < inboundFares.length; j++) {
      const outbound = outboundFares[i];
      const inbound = inboundFares[j];

      const daysApart = getDifferenceInDays(inbound.date, outbound.date);
      const totalPrice = outbound.price + inbound.price;

      if (daysApart > 1 && daysApart > daysBetweenFrom && daysApart < daysBetweenTo && totalPrice < maxPrice) {
        fareGroups.push([outbound, inbound]);
      }
    }
  }

  return fareGroups;
}

function getReturnFlights(flights: Flight[], params: UseFlightsParams): OriginData[] {
  return params.origins.map((origin) => {
    const outboundFlights = flights.filter((flight) => flight.origin === origin);
    const destinationDatas: DestinationData[] = outboundFlights.map((outbound) => {
      const inboundFares = flights.find((inbound) => inbound.origin === outbound.destination)?.fares || [];
      const fares = getFaresGroups(
        outbound.fares,
        inboundFares,
        params.maxPrice,
        params.daysBetweenFrom,
        params.daysBetweenTo
      );

      fares.sort((group1, group2) => {
        const totalPrice1 = group1[0].price + group1[1].price;
        const totalPrice2 = group2[0].price + group2[1].price;
        return totalPrice1 - totalPrice2;
      })

      let price = Infinity;
      let currency = '';

      if (fares.length > 0) {
        const [[first, second]] = fares;
        price = first.price + second.price;
        currency = first.currency;
      }

      return {
        destination: outbound.destination,
        oneWayFares: [],
        returnFares: fares,
        price,
        currency
      }
    });
    return {
      origin,
      destinations: destinationDatas.sort((destination1, destination2) => {
        return destination1.price - destination2.price;
      })
    }
  });
}

function filterFlights(flights: Flight[], params: UseFlightsParams) {
  return params.oneWay
    ? getOneWayFlights(flights, params)
    : getReturnFlights(flights, params);
 }

export function useFlightsData(params: UseFlightsParams) {
  const { data, loading } = useCollection<Flight>('api/flights');

  const flights = useMemo(() => {
    return filterFlights(data, params)
  }, [data, params]);

  return {
    flights,
    loading
  }
}