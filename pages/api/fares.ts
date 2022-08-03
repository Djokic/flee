// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getWholeCollectionFromDb} from "../../lib/mongo";

import CacheStore from "lib/cacheStore";

const KEY = 'fares';
async function getFlights() {
  const fares = await getWholeCollectionFromDb(KEY);
  const now = Date.now();
  const filteredFares = fares.filter((fare: { date: string | number | Date; }) => now < new Date(fare.date).getTime())
  return filteredFares;
}
CacheStore.setField({
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
