import { Airport, createOrUpdateAirports } from '@common/airports';
import { getDbSession } from '@common/dbSession';
import * as process from 'process';

import { RyanAirClient } from './clients/ryanair';
import { WizzAirClient } from './clients/wizzair';
import { mergeAirports } from './helpers/common';

async function run () {
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const ryanAirClient = new RyanAirClient({ lookupDays });
  const wizzAirClient = new WizzAirClient({ lookupDays });

  const airportsArrays = await Promise.all([
    ryanAirClient.getAirports(),
    wizzAirClient.getAirports()
  ]);

  let airports: Airport[] = mergeAirports(airportsArrays);

  // Get list of unusable airports
  const unusableAirportCodes = airports
    .filter((airport) => {
      const doesNotHaveConnections = !Array.isArray(airport.connections) || !airport.connections.length;
      const isPlaceholder = airport.name.includes('(Any)');
      return doesNotHaveConnections || isPlaceholder;
    })
    .map((airport) => airport.code);

  // Remove unusable airports and connections
  airports = airports
    .filter((airport) => !unusableAirportCodes.includes(airport.code))
    .map((airport) => ({
      ...airport,
      connections: (airport.connections)
        .filter((connection) => !unusableAirportCodes.includes(connection.split('.')[0]))
    }));
  const session = getDbSession();
  createOrUpdateAirports({ session, airports });
  await session.close();
  console.log('Saved Airports to DB!');
  process.exit(0);
}

run();
