import { wait } from 'clients/helpers';
import { addDaysToDate, formatDate } from 'helpers/date';
import { convertCurrency } from 'helpers/currency';
import { Fare, Operator } from '../types';

import { createHeaders, getNewSession, getVerificationTokenFromHeaders, logout } from './auth';

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

export async function getFares (apiUrl: string, params: GetFaresParams): Promise<Fare[]> {
  console.log(`[WizzAir] Getting Flights -> ${params.origin} <--> ${params.destination}`);
  const maxDays = 30;
  const batchesCount = Math.ceil(params.lookupDays / maxDays);
  const maxReqPerSession = 4;

  const fares: Fare[] = [];
  let sessionId;
  let verificationToken;
  for (let i = 0; i < batchesCount; i++) {
    /**
     * If max requests per session limit is reached
     * create new session (it will create new session at the beginning also)
     */
    if (i % maxReqPerSession === 0) {
      if (sessionId && verificationToken) {
        await logout(apiUrl, createHeaders(sessionId, verificationToken));
      }
      const data = await getNewSession(apiUrl);
      sessionId = data.sessionId;
      verificationToken = data.verificationToken;
    }

    const from = formatDate(addDaysToDate(new Date(params.startDate), (i * maxDays) + 1));
    const to = formatDate(addDaysToDate(new Date(params.startDate), ((i + 1) * maxDays) + 1));

    await wait(3000);
    // const tamperRequest: any = await fetch(`${apiUrl}/search/flightDates?departureStation=${params.origin}&arrivalStation=${params.destination}&from=${from}&to=${to}`, {
    //   headers: createHeaders(sessionId, verificationToken),
    //   mode: 'cors',
    //   credentials: 'include'
    // });
    // verificationToken = getVerificationTokenFromHeaders(tamperRequest.headers) || verificationToken;

    const res: any = await fetch(`${apiUrl}/search/timetable`, {
      headers: createHeaders(sessionId, verificationToken),
      body: JSON.stringify({
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
      mode: 'cors',
      credentials: 'include',
      method: 'POST'
    });

    const data: GetFaresResponse = await res.json();
    verificationToken = getVerificationTokenFromHeaders(res.headers) || verificationToken;

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
