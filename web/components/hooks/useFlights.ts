import {useCollection} from "components/hooks/useCollection";
import {useMemo} from "react";
import {getDifferenceInDays} from "@common/date";
import {Fare} from "@common/types";

type UseFaresParams = {
  origins: string[];
  oneWay?: boolean;
  maxPrice?: number;
  daysBetweenFrom?: number;
  daysBetweenTo?: number;
}

export type DestinationData = {
  destination: string;
  oneWayFares: Fare[];
  twoWayFares: Fare[][];
  price?: number,
  currency?: string;
}

export type OriginData = {
  origin: string;
  destinations: DestinationData[]
}

function getUnique(items: string[]): string[] {
  return Array.from(new Set(items));
}

function createData(fares: Fare[], params: UseFaresParams) {
  const origins = getUnique(
    fares
      .map(({origin}) => origin)
      .filter((origin) => params.origins.includes(origin))
    );

  return origins.map(origin => {
    const destinations = getUnique(
      fares
        .filter((fare) => fare.origin === origin)
        .map(({destination}) => destination)
    );

    return {
      origin,
      destinations: destinations.map((destination) => {
        const outboundFares = fares.filter((fare) => fare.origin === origin && fare.destination === destination);
        let price;
        let currency;


        let oneWayFares: Fare[] = [];
        let twoWayFares: Fare[][] = [];

        if (params.oneWay) {
          oneWayFares = outboundFares.filter((fare) => fare.price < (params.maxPrice || Infinity));
          price = Math.min(...oneWayFares.map(({price}) => price));
          currency = oneWayFares[0].currency;
        } else {
          const inboundFares = fares.filter((fare) => fare.origin === destination && fare.destination === origin);
          outboundFares.forEach((outboundFare) => {
            inboundFares.forEach((inboundFare) => {
              const priceInRange = outboundFare.price + inboundFare.price < (params.maxPrice || Infinity);
              const minDiffInDaysOk = getDifferenceInDays(inboundFare.date, outboundFare.date) >= (params.daysBetweenFrom || 0);
              const maxDiffInDaysOk = getDifferenceInDays(inboundFare.date, outboundFare.date) <= (params.daysBetweenTo || 365);
              if (priceInRange && minDiffInDaysOk && maxDiffInDaysOk) {
                twoWayFares.push([outboundFare, inboundFare]);
              }
            })
          });
          price = Math.min(...twoWayFares.map(fare => fare.reduce((acc, curr) => acc + curr.price, 0)));
          currency = twoWayFares?.[0]?.[0]?.currency;
        }

        return {
          destination,
          oneWayFares,
          twoWayFares,
          price,
          currency
        }
      }).sort((destination1, destination2) => (destination1?.price || 0) - (destination2?.price || 0))
    }
  });
}

export function useFlights(params: UseFaresParams) {
  const {data: fares, loading} = useCollection<Fare>('api/fares');

  const data = useMemo(() => {
    return createData(fares, params);
  }, [fares, params]);

  return {
    data,
    loading
  }
}