import {wait} from "service/clients/helpers";
import {getNewSession, logout } from "service/clients/wizzair/auth";
import {formatDate} from "service/helpers/date";
import {Fare, Flight, Operator} from "service/clients/types";

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

async function getFlightDates(params: GetFlightsParams, headers: Record<string, string>): Promise<GetFlightDatesResponse> {
  const endDate = new Date(params.startDate);
  endDate.setDate(endDate.getDate() + params.lookupDays);

  const res = await fetch(`https://be.wizzair.com/12.11.2/Api/search/flightDates?departureStation=${params.origin}&arrivalStation=${params.destination}&from=${params.startDate}&to=${formatDate(endDate)}`, {
    headers,
    "mode": "cors",
    "credentials": "include"
  });

  return await res.json();
}

type GetFlightsPartResponse = {
  outboundFlights: FlightResponse[]
}

async function getFlightsPart(params: GetFlightsParams, headers: Record<string, string>): Promise<GetFlightsPartResponse> {
  const res = await fetch("https://be.wizzair.com/12.11.2/Api/asset/farechart", {
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

export async function getFlights(params: GetFlightsParams): Promise<Flight> {
  let headers = await getNewSession();
  const maxInterval = 7;
  const batchesCount = Math.ceil(params.lookupDays / ((maxInterval * 2) + 1));

  const dates = await getFlightDates(params, headers);
  await logout(headers)
  const fares: Fare[] = [];

  for (let i = 0; i < batchesCount; i++) {
    await wait(1000);
    headers = await getNewSession();

    const startDate = fares.length > 0
      ? getStartDate(fares[fares.length - 1].date, maxInterval)
      : getStartDate(parseDate(dates.flightDates[0]), maxInterval);

    const newParams = {
      origin: params.origin,
      destination: params.destination,
      startDate: startDate,
      lookupDays: maxInterval
    }

    const data = await getFlightsPart(newParams, headers);

    let flights = data.outboundFlights?.filter((flight) => flight.price?.amount > 0) || [];
    if (fares.length > 0 && flights.length > 0) {
      flights.shift();
    }

    flights.forEach((flight) => {
      fares.push({
        date: parseDate(flight.date),
        price: flight.price.amount,
        currency: flight.price.currencyCode,
        operator: Operator.WIZZAIR
      })
    })
    await logout(headers);
  }

  return {
    origin: params.origin,
    destination: params.destination,
    fares
  }
}