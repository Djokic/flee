import { Axios } from 'axios';
import { wait } from 'helpers/wait';
import { getUniqueFares } from 'helpers/common';
import { addDaysToDate, formatDate } from '@common/date';
import Exchange from '@common/exchange';
import { Fare, Operator } from '@common/types';

type GetFaresParams = {
  origin: string;
  destination: string;
  startDate: string;
  lookupDays: number;
}

type FlightResponse = {
  departureStation: string,
  arrivalStation: string,
  date: string,
  priceType: 'price' | 'checkPrice' | 'noData',
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
  const maxDays = 21;
  const batchesCount = Math.ceil(params.lookupDays / maxDays);

  const fares: Fare[] = [];
  for (let i = 0; i < batchesCount; i++) {
    const date = formatDate(addDaysToDate(new Date(params.startDate), (i * maxDays) + 11));

    await wait(1000);

    const res: any = await axios.request({
      url: '/asset/farechart',
      method: 'POST',
      data: {
        adultCount: 1,
        childCount: 0,
        infantCount: 0,
        dayInterval: 10,
        wdc: true,
        isRescueFare: false,
        isFlightChange: false,
        flightList: [
          {
            departureStation: params.origin,
            arrivalStation: params.destination,
            date
          },
          {
            departureStation: params.destination,
            arrivalStation: params.origin,
            date
          }
        ]
      }
    });

    const data: GetFaresResponse = res.data;

    const targetCurrency = process.env.TARGET_CURRENCY || 'EUR';
    const joinFlights = [...data?.outboundFlights, ...data?.returnFlights].filter((flight) => flight.price.amount > 0);

    for (const flight of joinFlights) {
      if (flight.priceType === 'price' && flight.date) {
        fares.push({
          origin: flight.departureStation,
          destination: flight.arrivalStation,
          date: formatDate(new Date(flight.date)),
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

  return getUniqueFares(fares).filter((fare) => fare.price);
}
