import {getNewSession, logout } from "./auth";
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

type FlightResponse = {
  date: string;
  price: {
    amount: number,
    currencyCode: string,
  }
}

type GetFlightDatesResponse = {
  flightDates: string[]
}

async function getFlightDates(apiUrl: string, params: GetFlightsParams, headers: Record<string, string>): Promise<GetFlightDatesResponse> {
  const endDate = new Date(params.startDate);
  endDate.setDate(endDate.getDate() + params.lookupDays);

  const res = await fetch(`${apiUrl}/search/flightDates?departureStation=${params.origin}&arrivalStation=${params.destination}&from=${params.startDate}&to=${formatDate(endDate)}`, {
    headers,
    "mode": "cors",
    "credentials": "include"
  });

  return await res.json();
}

type GetFlightsPartResponse = {
  outboundFlights: FlightResponse[]
}

async function getFlightsPart(apiUrl: string, params: GetFlightsParams, headers: Record<string, string>): Promise<GetFlightsPartResponse> {
  const res = await fetch(`${apiUrl}/asset/farechart`, {
    headers,
    "body": JSON.stringify({
      isRescueFare: false,
      adultCount: 1,
      childCount: 0,
      dayInterval: params.lookupDays, //max is 10 days
      wdc: true,
      isFlightChange: false,
      flightList: [{departureStation: params.origin, arrivalStation: params.destination, date: params.startDate}]
    }),
    "mode": "cors",
    "credentials": "include",
    "method": "POST"
  });

  return await res.json();
}

function parseDate(date: string) {
  return date.split('T')[0];
}

function getStartDate(date: string, delay: number) {
  const d = new Date(parseDate(date));
  d.setDate(d.getDate() + delay);
  return formatDate(d);
}

export async function getFlights(apiUrl: string, params: GetFlightsParams): Promise<Flight> {
  console.log(`[WizzAir] Getting Flights -> ${params.origin} - ${params.destination}`);
  const maxInterval = 7;
  const batchesCount = Math.ceil(params.lookupDays / ((maxInterval * 2) + 1));

  const reqLimit = 5;
  let reqCounter = 0;

  let headers = await getNewSession(apiUrl);

  const fares: Fare[] = [];

  const dates = await getFlightDates(apiUrl, params, headers);
  reqCounter++;


  if (dates.flightDates.length > 0) {
    for (let i = 0; i < batchesCount; i++) {
      await wait(300);

      if (reqCounter === 0) {
        headers = await getNewSession(apiUrl);
      }

      const startDate = fares.length > 0
        ? getStartDate(fares[fares.length - 1].date, maxInterval)
        : getStartDate(parseDate(dates.flightDates?.[0]), maxInterval);

      const newParams = {
        origin: params.origin,
        destination: params.destination,
        startDate: startDate,
        lookupDays: maxInterval
      }

      const data = await getFlightsPart(apiUrl, newParams, headers);
      reqCounter++;

      let flights = data.outboundFlights?.filter((flight) => flight.price?.amount > 0) || [];
      if (fares.length > 0 && flights.length > 0) {
        flights.shift();
      }

      const targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
      for (const flight of flights) {
        fares.push({
          operator: Operator.WIZZAIR,
          date: parseDate(flight.date),
          currency: targetCurrency,
          price: await convertCurrency({
            from: flight.price.currencyCode,
            to: targetCurrency,
            amount: flight.price.amount || 0
          })
        })
      }

      if (reqCounter >= reqLimit) {
        await logout(apiUrl, headers);
        reqCounter = 0;
      }

    }
  }

  if (reqCounter > 0) {
    await logout(apiUrl, headers);
  }

  return {
    origin: params.origin,
    destination: params.destination,
    fares
  }
}