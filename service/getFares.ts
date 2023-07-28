/* eslint-disable import/first */
require('dotenv').config();

import { Airport, getAllAirports } from '@common/airports';
import { getDbSession } from '@common/dbSession';
import { createOrUpdateFares } from '@common/fares';
import { Operator } from '@common/types';

import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';

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
  // const startAt = Date.now();

  const airportCodes: string[] = process.env.AIRPORTS?.split(',') || [];
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const OperatorClient = getOperatorClient(operator);

  if (!OperatorClient) {
    throw new Error('Missing operator');
  }

  const client = new OperatorClient({ lookupDays });

  const session = getDbSession();

  const airports: Airport[] = await getAllAirports({ session });

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
      const payload = fares.map((fare) => ({
        ...fare,
        date: new Date(fare.date).toISOString(),
        operator: operator as string,
        id: `${fare.origin}-${fare.destination}-${fare.date}-${fare.operator}`
      }));

      // eslint-disable-next-line no-undef
      await createOrUpdateFares({ session, fares: payload });
    }
  }

  await session.close();

  console.log(`---Saved Fares to DB! [${operator}]---`);
}

async function runAll () {
  await Promise.all([
    run(Operator.RYANAIR, false)
    // run(Operator.WIZZAIR, false)
  ]);
}

runAll();
