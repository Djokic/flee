import { Axios } from 'axios';
import { wait } from 'clients/helpers';
import { addDaysToDate, formatDate } from 'helpers/date';
import { convertCurrency } from 'helpers/currency';
import { Fare, Operator } from '../types';

type GetFaresParams = {
  origin: string;
  destination: string;
  startDate: string;
  lookupDays: number;
}

type FlightResponse = {
  departureStation: string,
  arrivalStation: string,
  departureDate: string,
  priceType: 'price' | 'checkPrice',
  departureDates: [string],
  classOfService: string,
  hasMacFlight: boolean,
  price: {
    amount: number,
    currencyCode: string
  },
}

type GetFaresResponse = {
  outboundFlights: FlightResponse[];
  returnFlights: FlightResponse[]
}

export async function getFares (axios: Axios, params: GetFaresParams): Promise<Fare[]> {
  console.log(`[WizzAir] Getting Flights -> ${params.origin} <--> ${params.destination}`);
  const maxDays = 30;
  const batchesCount = Math.ceil(params.lookupDays / maxDays);

  const fares: Fare[] = [];
  for (let i = 0; i < batchesCount; i++) {
    const from = formatDate(addDaysToDate(new Date(params.startDate), (i * maxDays) + 1));
    const to = formatDate(addDaysToDate(new Date(params.startDate), ((i + 1) * maxDays) + 1));

    await wait(1000);

    const res: any = await axios.request({
      url: '/search/timetable',
      method: 'POST',
      data: {
        adultCount: 1,
        childCount: 0,
        infantCount: 0,
        priceType: 'regular',
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
        ]
      }
    });

    const data: GetFaresResponse = res.data;

    const targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
    const joinFlights = [...data?.outboundFlights, ...data?.returnFlights].filter((flight) => flight.price.amount > 0);

    for (const flight of joinFlights) {
      fares.push({
        origin: flight.departureStation,
        destination: flight.arrivalStation,
        date: flight.departureDates[0] ?? '',
        operator: Operator.WIZZAIR,
        currency: flight.price.currencyCode,
        price: await convertCurrency({
          from: flight.price.currencyCode,
          to: targetCurrency,
          amount: flight.price.amount
        })
      });
    }
  }

  return fares;
}
