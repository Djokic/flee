// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getFlightsData} from "service/clients/ryanair";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await getFlightsData({
    ADT: 1,
    Origin: 'INI',
    Destination: 'CFU',
    DateOut: '2022-07-09',
    FlexDaysOut: 6
  });
  console.log('DD', data);

  const response = data.trips?.[0].dates
    .map(({ dateOut, flights }) =>
      `${dateOut}: ${flights[0]?.regularFare.fares[0].amount}`
    );
  res.status(200).json({ response })
}
