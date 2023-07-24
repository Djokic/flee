import axios from 'axios';
import axiosRetry from 'axios-retry';
import { Prisma, Operator } from '@prisma/client';

import { addDaysToDate, formatDate } from 'helpers/date';
import { wait } from 'helpers/wait';
import { getUniqueFares } from 'helpers/common';
import Exchange from 'helpers/exchange';

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

axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export async function getFares (params: GetFaresParams): Promise<Prisma.FareCreateInput[]> {
  await wait(500);
  const endDate = formatDate(addDaysToDate(new Date(params.startDate), params.lookupDays));
  const url = `https://www.ryanair.com/api/farfnd/3/oneWayFares/${params.origin}/${params.destination}/cheapestPerDay?outboundDateFrom=${params.startDate}&outboundDateTo=${endDate}`;
  const res = await axios.request({ url, method: 'GET' });
  const data: GetFaresResponse = res.data;
  const fares: Prisma.FareCreateInput[] = [];
  const targetCurrency = process.env.TARGET_CURRENCY || 'EUR';

  for (const f of data.outbound?.fares.filter((fare) => !fare.unavailable && !fare.soldOut)) {
    fares.push({
      origin: params.origin,
      destination: params.destination,
      operator: Operator.RYANAIR,
      date: new Date(f.departureDate),
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

  return getUniqueFares(fares).filter((fare) => fare.price);
}
