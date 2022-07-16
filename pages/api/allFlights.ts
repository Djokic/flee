// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {Flight, getFlightsData, getRoutesForAirport, Trip} from "service/clients/ryanair";
import {addDaysToDate, formatDate} from "service/helpers/date";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const maxDays = 6;
  const {
    airport,
    startDate,
    lookupDays
  } = req.query;

  const routes = await getRoutesForAirport(airport as string);
  const destinations = routes.map((route) => route.arrivalAirport.code);

  const lastDate = new Date(startDate as string);
  const startIntervalDates = [formatDate(lastDate)];
  for (let i = 0; i <= Math.ceil(parseInt(lookupDays as string) / maxDays); i++) {
    addDaysToDate(lastDate, maxDays + 1);
    startIntervalDates.push(formatDate(lastDate));
  }

  const params = [];
  for (let i = 0; i < destinations.length; i++) {
    for (let j = 0; j < startIntervalDates.length; j++) {
      params.push({
        ADT: 1,
        Origin: airport as string,
        Destination: destinations[i],
        DateOut: startIntervalDates[j],
        FlexDaysOut: maxDays
      })
    }
  }

  // console.log(destinations)

  // const datas = await Promise.all(params.map(getFlightsData));
  // const t = datas.reduce((acc, curr) => [...acc, ...curr.trips], [] as Trip[]);
  // console.log('T', t.length);
  // const f = t.reduce((acc, { dates }) => [...acc, ...dates.flights], [] as Flight[]);


  // new Array(Math.ceil(parseInt(lookupDays as string) / maxDays))
  //   .fill(true)
  //
  //
  // const res = await Promise.all(
  //   new Array(Math.ceil(parseInt(lookupDays as string) / maxDays))
  //     .fill(true)
  //     .map(() => {
  //       getFlightsData({
  //         ADT: 1,
  //         Origin: airport as string,
  //           Destination: 'CFU',
  //           DateOut: '2022-07-09',
  //           FlexDaysOut: 6
  //       })
  //     })
  // )

  // console.log(req.query);
  // const data = await getFlightsData({
  //   ADT: 1,
  //   Origin: 'INI',
  //   Destination: 'CFU',
  //   DateOut: '2022-07-09',
  //   FlexDaysOut: 6
  // });
  // console.log('DD', data);
  //
  // const response = data.trips?.[0].dates
  //   .map(({ dateOut, flights }) =>
  //     `${dateOut}: ${flights[0]?.regularFare.fares[0].amount}`
  //   );
  res.status(200).json(destinations)
}
