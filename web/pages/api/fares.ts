// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Fare } from '@prisma/client'
import { prisma } from '@/helpers/db';
import { getQueryArrayParam } from '@/helpers/query';

type Data = {
  fares?: Fare[];
  error?: FaresError;
}

enum FaresError {
  MISSING_ORIGINS = 'Missing origins',
  METHOD_NOT_ALLOWED = 'Method not allowed'
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: FaresError.METHOD_NOT_ALLOWED });
    return;
  }

  const origins = getQueryArrayParam(req.query.origins as string);
  const destinations = getQueryArrayParam(req.query.destinations as string);
  const dates = getQueryArrayParam(req.query.dates as string);

  if (!origins?.length) {
    res.status(400).json({ error: FaresError.MISSING_ORIGINS });
    return;
  }

  console.log('SSS', origins, destinations, dates);

  const data = await prisma.fare.findMany({
    where: {
      origin: {
        in: origins
      },
      ...(Array.isArray(destinations) ? { destination: { in: destinations } } : {}),
      ...(Array.isArray(dates) ? { date: { in: dates } } : {}),
    }
  });

  
  res.status(200).json({ fares: data })
}
