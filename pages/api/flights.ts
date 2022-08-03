// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getWholeCollectionFromDb} from "../../lib/mongo";

import CacheStore from "lib/cacheStore";

const KEY = 'flights';
async function getFlights() {
  const flights = await getWholeCollectionFromDb(KEY);
  const now = Date.now();
  const filteredFlights = flights.map((flight: { fares: any[]; }) => {
    return {
      ...flight,
      fares: flight.fares.filter((fare) => {
        return now < new Date(fare.date).getTime();
      })
    }
  });
  return filteredFlights;
}
CacheStore.addField({
  key: KEY,
  getter: getFlights,
  ttl: 600_000
});

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    res.status(404).end();
  }



  res.status(200).json(await CacheStore.get(KEY));
}
