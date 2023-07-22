import { Axios, AxiosResponse } from 'axios';
import { wait } from 'helpers/wait';
import { getUniqueFares } from 'helpers/common';
import { addDaysToDate, formatDate } from '@common/date';
import Exchange from '@common/exchange';
import { Prisma, Operator } from '@prisma/client';


type GetFaresParams = {
  origin: string;
  destination: string;
  startDate: string;
  lookupDays: number;
}

type FlightPayload = {
  departureStation: string;
  arrivalStation: string;
  from: string;
  to: string;
};

type TimetableParams = {
  flightList: FlightPayload[];
  priceType: string;
  adultCount: number;
  childCount: number;
  infantCount: number;
};

type Price = {
  amount: number;
  currencyCode: string;
};

type Flight = {
  departureStation: string;
  arrivalStation: string;
  departureDate: string;
  price: Price;
  priceType: string;
  departureDates: string[];
  classOfService: string;
  hasMacFlight: boolean;
};

type TimetableResponse = {
  outboundFlights: Flight[];
  returnFlights: Flight[];
};

type FetcherFn = (url: string, params: TimetableParams) => Promise<AxiosResponse>;


export async function getFares(fetcher: FetcherFn, params: GetFaresParams): Promise<Prisma.FareCreateInput[]> {
  const maxDays = 30;
  const batchesCount = Math.ceil(params.lookupDays / maxDays);

  const fares: Prisma.FareCreateInput[] = [];
  for (let i = 0; i < batchesCount; i++) {
    const from = formatDate(addDaysToDate(new Date(params.startDate), (i * maxDays)));
    const to = formatDate(addDaysToDate(new Date(params.startDate), ((i + 1) * maxDays)));

    const { data }: { data: TimetableResponse } = await fetcher('/search/timetable', {
      flightList: [
        {
          departureStation: params.origin,
          arrivalStation: params.destination,
          from,
          to
        },
        {
          departureStation: params.destination,
          arrivalStation: params.origin,
          from,
          to
        }
      ],
      priceType: 'wdc',
      adultCount: 1,
      childCount: 0,
      infantCount: 0
    });

    const targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
    const joinFlights = [...data?.outboundFlights, ...data?.returnFlights].filter((flight) => flight.price.amount > 0);

    for (const flight of joinFlights) {
      if (flight.priceType === 'price' && flight.departureDate) {
        for (const departureDate of flight.departureDates) {
          fares.push({
            origin: flight.departureStation,
            destination: flight.arrivalStation,
            date: new Date(departureDate),
            operator: Operator.WIZZAIR,
            currency: targetCurrency,
            price: flight.price.currencyCode.toUpperCase() === targetCurrency
              ? flight.price.amount
              : await Exchange.convert({
                source: flight.price.currencyCode,
                target: targetCurrency,
                amount: flight.price.amount
              })
          });
        }
      }
    }
  }

  return getUniqueFares(fares).filter((fare) => fare.price);
}
