// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {getWholeCollectionFromDb} from "lib/mongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{  }>
) {
  if (req.method !== 'GET') {
    res.status(404).end();
  }

  res.status(200).json(await getWholeCollectionFromDb('status'));
}
