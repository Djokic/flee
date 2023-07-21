// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Fare } from '@prisma/client'
import { prisma } from '@/helpers/db';

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

  const {
    origins,
    destinations,
    dates,
  } = req.query;

  if (!origins) {
    res.status(400).json({ error: FaresError.MISSING_ORIGINS });
    return;
  }

  const data = await prisma.fare.findMany({
    where: {
      origin: {
        in: origins as string[]
      },
      destination: {
        in: Array.isArray(destinations) ? destinations as string[] : []
      },
      date: {
        in: Array.isArray(dates) ? dates.map((date) => new Date(date as string)) : []
      }
    }
  });

  
  res.status(200).json({ fares: data })
}
