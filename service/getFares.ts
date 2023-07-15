/* eslint-disable import/first */
require('dotenv').config();

import { Airport, Operator, ServiceStatusCode } from '@common/types';
import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';
import { prisma } from './helpers/prisma';

async function run (operator: Operator, allAirports: boolean) {
  const startAt = Date.now();

  const airportCodes: string[] = process.env.AIRPORTS?.split(',') || [];
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const { id } = await prisma.serviceStatus.create({
    data: {
      code: ServiceStatusCode.IN_PROGRESS,
      operator,
      startAt,
      details: allAirports ? 'all' : airportCodes.join(',')
    }
  });

  try {
    const OperatorClient = {
      [Operator.WIZZAIR]: WizzAirClient,
      [Operator.RYANAIR]: RyanAirClient
    }[operator as Operator.WIZZAIR | Operator.RYANAIR];

    if (!OperatorClient) {
      throw new Error('Missing operator');
    }

    const client = new OperatorClient({ lookupDays });

    const airports: Airport[] = await prisma.airport.findMany() as Airport[];
    const filteredAirports =
      allAirports
        ? airports
        : airports.filter(({ code }) => airportCodes.includes(code));

    await client.getFares(filteredAirports);

    await prisma.$transaction([
      prisma.fare.deleteMany({ where: { operator } }),
      prisma.fare.createMany({
        data: client.fares
      })
    ]);

    await prisma.serviceStatus.update({
      where: { id },
      data: {
        endAt: Date.now(),
        code: ServiceStatusCode.SUCCESS
      }
    });

    console.log('Saved Fares to DB!');
  } catch (error: any) {
    await prisma.serviceStatus.update({
      where: { id },
      data: {
        endAt: Date.now(),
        code: ServiceStatusCode.ERROR,
        error: error?.message
      }
    });

    throw error;
  }
}

async function runAll () {
  await Promise.all([
    run(Operator.RYANAIR, true),
    run(Operator.WIZZAIR, true)
  ]);
}

runAll();
