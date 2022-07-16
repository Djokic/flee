// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {getAirports, getFlightsData} from "service/clients/ryanair";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await getAirports();
  res.status(200).json({ data })
}
