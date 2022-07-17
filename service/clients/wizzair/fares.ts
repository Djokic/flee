import {addDaysToDate, formatDate} from "helpers/date";
import {convertCurrency} from "../../helpers/currency";
import {Fare, Operator} from '../types';

import {getApiUrl, getNewSession} from "./auth";

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
  priceType: 'price',
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

export async function getFares(params: GetFaresParams): Promise<Fare[]> {
  console.log(`[WizzAir] Getting Flights -> ${params.origin} <--> ${params.destination}`);
  const maxDays = 30;
  const batchesCount = Math.ceil(params.lookupDays / maxDays);
  const maxReqPerSession = 5;

  const apiUrl = await getApiUrl();

  const fares: Fare[] = [];

  let headers;
  for (let i = 0; i < batchesCount; i++) {
    /**
     * If max requests per session limit is reached
     * create new session (it will create new session at the beginning also)
     */
    if (i % maxReqPerSession === 0) {
      headers = await getNewSession(apiUrl);
    }

    const from = formatDate(addDaysToDate(new Date(params.startDate), i * maxDays));
    const to = formatDate(addDaysToDate(new Date(params.startDate), (i + 1) * maxDays));

    const res = await fetch(`${apiUrl}/search/timetable`, {
      headers,
      "body": JSON.stringify({
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
      }),
      "mode": "cors",
      "credentials": "include",
      "method": "POST"
    });

    const data: GetFaresResponse = await res.json();

    const targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
    const joinFlights = [...data.outboundFlights, ...data.outboundFlights];

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
      })
    }
  }

  return fares;
}