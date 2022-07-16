// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getAirports, getFlightsData, getRoutesForAirport} from "service/clients/ryanair";
import {getFares, GetFlightsParams} from "service/clients/ryanair/flights";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await getFares(req.query as GetFaresParams);
  res.status(200).json({ data })
}
