/* eslint-disable import/first */
require('dotenv').config();

import { Airport, getAllAirports } from '@common/airports';
import { getDbSession } from '@common/dbSession';
import { createOrUpdateFares } from '@common/fares';
import { Operator } from '@common/types';

import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';
import { addMinutes } from 'date-fns';
import * as process from 'process';
import { TravelTimeStore } from './helpers/travelTime';

function getOperatorClient (operator: Operator) {
  if (operator === Operator.RYANAIR) {
    return RyanAirClient;
  }

  if (operator === Operator.WIZZAIR) {
    return WizzAirClient;
  }

  return undefined;
}

/**
 * Get a chunk of airports to process
 * @param airports
 * @param workerIndex
 * @param totalWorkers
 */
function getAirportsChunk (airports: Airport[], workerIndex: number, totalWorkers: number) {
  // Sort the airports by the number of connections in descending order
  const sortedAirports = [...airports].sort((a, b) => b.connections.length - a.connections.length);

  // Distribute the airports to each worker in a round-robin fashion
  // This way we ensure that the workers have a similar amount of work
  const chunk = sortedAirports.filter((_, index) => index % totalWorkers === workerIndex);

  return chunk;
}

async function run (operator: Operator) {
  // The first two arguments are Node and the script path, so we start at index 2
  const workerIndex = parseInt(process.argv[2], 10) ?? 0;
  const totalWorkers = parseInt(process.argv[3], 10) ?? 1;

  console.log(`Worker ${workerIndex}/${totalWorkers}: [${operator}] Starting`);

  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '60');

  const OperatorClient = getOperatorClient(operator);

  if (!OperatorClient) {
    throw new Error('Missing operator');
  }

  const client = new OperatorClient({ lookupDays });

  const session = getDbSession();

  const airports: Airport[] = await getAllAirports({ session });
  const airportsChunk = getAirportsChunk(airports, workerIndex, totalWorkers);
  const totalAirports = airportsChunk.length;
  let currentAirport = 0;

  const travelTimeStore = new TravelTimeStore(airports);

  for (const airport of airportsChunk) {
    currentAirport++;
    console.log(`[${operator}] ${airport.code} (${currentAirport}/${totalAirports})`);
    const fares = await client.getFaresForAirport(airport);

    if (fares.length !== 0) {
      const payload = fares
        .filter((fare) => Boolean(fare.price))
        .map((fare) => {
          const duration = travelTimeStore.getTravelTimeInMins(fare.origin, fare.destination);
          return {
            ...fare,
            date: new Date(fare.date).toISOString(),
            operator: operator as string,
            duration,
            arrivalDate: addMinutes(new Date(fare.date), duration).toISOString(),
            id: `${fare.origin}-${fare.destination}-${fare.date}-${fare.operator}`
          };
        });

      await createOrUpdateFares({ session, fares: payload });
    }
  }

  await session.close();

  console.log(`Worker ${workerIndex}/${totalWorkers}: [${operator}] Done`);
}

async function runAll () {
  await Promise.all([
    run(Operator.RYANAIR),
    run(Operator.WIZZAIR)
  ]);
  process.exit(0);
}

runAll();
