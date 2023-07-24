/* eslint-disable import/first */
require('dotenv').config();

import { Operator, Airport, ServiceStatusCode } from '@prisma/client';

import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';
import { prisma } from './helpers/prisma';

function getOperatorClient (operator: Operator) {
  if (operator === Operator.RYANAIR) {
    return RyanAirClient;
  }

  if (operator === Operator.WIZZAIR) {
    return WizzAirClient;
  }

  return undefined;
}

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
    const OperatorClient = getOperatorClient(operator);

    if (!OperatorClient) {
      throw new Error('Missing operator');
    }

    const client = new OperatorClient({ lookupDays });

    const airports: Airport[] = await prisma.airport.findMany() as Airport[];
    const filteredAirports =
      allAirports
        ? airports
        : airports.filter(({ code }) => airportCodes.includes(code));

    const totalAirports = filteredAirports.length;
    let currentAirport = 0;

    for (const airport of filteredAirports) {
      currentAirport++;
      console.log(`[${operator}] ${airport.code} (${currentAirport}/${totalAirports})`);
      const fares = await client.getFaresForAirport(airport);

      if (fares.length !== 0) {
        await prisma.$transaction([
          prisma.fare.deleteMany({ where: { operator, origin: airport.code } }),
          prisma.fare.createMany({
            data: fares
          })
        ]);
      }
    }

    await prisma.serviceStatus.update({
      where: { id },
      data: {
        endAt: Date.now(),
        code: ServiceStatusCode.SUCCESS
      }
    });

    console.log(`---Saved Fares to DB! [${operator}]---`);
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
