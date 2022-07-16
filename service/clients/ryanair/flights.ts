import {Flight, Operator} from "service/clients/types";
import {formatDate} from "service/helpers/date";

type GetFlightsParams = {
  origin: string;
  destination: string;
  startDate: string;
  lookupDays: number;
}

type FarePriceResponse = {
  value: number;
  currencyCode: string;
  currencySymbol: string;
}

type FareResponse = {
  day: string;
  arrivalDate: string;
  departureDate: string;
  price: FarePriceResponse | null;
  soldOut: boolean;
  unavailable: boolean;
  sellKey: string | null;
}

type GetFaresResponse = {
  outbound: {
    fares: FareResponse[]
  }
}

export async function getFlights(params: GetFlightsParams): Promise<Flight> {
  const endDate = new Date(params.startDate);
  endDate.setDate(endDate.getDate() + params.lookupDays);
  const res = await fetch(`https://www.ryanair.com/api/farfnd/3/oneWayFares/${params.origin}/${params.destination}/cheapestPerDay?outboundDateFrom=${params.startDate}&outboundDateTo=${formatDate(endDate)}`);
  const data: GetFaresResponse = await res.json();

  return {
    origin: params.origin,
    destination: params.destination,
    fares: data.outbound?.fares
      .filter((fare) => !fare.unavailable && !fare.soldOut)
      .map((fare) => ({
        date: fare.day,
        price: fare.price?.value || 0,
        currency: fare.price?.currencyCode || '',
        operator: Operator.RYANAIR
      }))
  }
}