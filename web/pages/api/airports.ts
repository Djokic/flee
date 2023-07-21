// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Airport } from '@prisma/client'
import { prisma } from '@/helpers/db';
import { getQueryArrayParam } from '@/helpers/query';

type Data = {
  airports?: Airport[];
  error?: AirportsError;
}

enum AirportsError {
  METHOD_NOT_ALLOWED = 'Method not allowed'
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: AirportsError.METHOD_NOT_ALLOWED });
    return;
  }

  const data = await prisma.airport.findMany();
  res.status(200).json({ airports: data })
}
