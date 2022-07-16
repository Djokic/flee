import {wait} from "../helpers";
import {Fare, Flight, Operator} from "../types";

import {formatDate} from "../../helpers/date";
import {convertCurrency} from "../../helpers/currency";

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
  console.log(`Getting Flights [RyanAir] -> ${params.origin} - ${params.destination}`);
  await wait(500);
  const endDate = new Date(params.startDate);
  endDate.setDate(endDate.getDate() + params.lookupDays);
  const res = await fetch(`https://www.ryanair.com/api/farfnd/3/oneWayFares/${params.origin}/${params.destination}/cheapestPerDay?outboundDateFrom=${params.startDate}&outboundDateTo=${formatDate(endDate)}`);
  const data: GetFaresResponse = await res.json();

  const fares: Fare[] = [];
  const targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
  for (const f of data.outbound?.fares.filter((fare) => !fare.unavailable && !fare.soldOut)) {
    fares.push({
      operator: Operator.RYANAIR,
      date: f.day,
      currency: targetCurrency,
      price: await convertCurrency({
        from: f.price?.currencyCode || '',
        to: targetCurrency,
        amount: f.price?.value || 0,
      })
    })
  }

  return {
    origin: params.origin,
    destination: params.destination,
    fares
  }
}