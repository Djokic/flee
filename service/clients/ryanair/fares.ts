import { convertCurrency } from 'helpers/currency';

import { addDaysToDate, formatDate } from 'helpers/date';
import { getUniqueFares, wait } from '../helpers';
import { Fare, Operator } from '../types';
import Exchange from '../../../lib/exchange';

type GetFaresParams = {
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

export async function getFares (params: GetFaresParams): Promise<Fare[]> {
  console.log(`[RyanAir] Getting Flights -> ${params.origin} -> ${params.destination}`);
  await wait(500);
  const endDate = formatDate(addDaysToDate(new Date(params.startDate), params.lookupDays));
  const res = await fetch(`https://www.ryanair.com/api/farfnd/3/oneWayFares/${params.origin}/${params.destination}/cheapestPerDay?outboundDateFrom=${params.startDate}&outboundDateTo=${endDate}`);
  const data: GetFaresResponse = await res.json();

  const fares: Fare[] = [];
  const targetCurrency = process.env.TARGET_CURRENCY || 'EUR';

  for (const f of data.outbound?.fares.filter((fare) => !fare.unavailable && !fare.soldOut)) {
    fares.push({
      origin: params.origin,
      destination: params.destination,
      operator: Operator.RYANAIR,
      date: f.departureDate,
      currency: targetCurrency,
      price: f.price?.currencyCode.toUpperCase() === targetCurrency
        ? f.price.value
        : await Exchange.convert({
          source: f.price?.currencyCode || '',
          target: targetCurrency,
          amount: f.price?.value || 0
        })
    });
  }

  return getUniqueFares(fares);
}
