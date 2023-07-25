/* eslint-disable import/first */
require('dotenv').config();
import { Prisma } from '@prisma/client';

import { mergeAirports } from 'helpers/common';

import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';
import { prisma } from './helpers/prisma';

async function run () {
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const ryanAirClient = new RyanAirClient({ lookupDays });
  const wizzAirClient = new WizzAirClient({ lookupDays });

  const airportsArrays = await Promise.all([
    ryanAirClient.getAirports(),
    wizzAirClient.getAirports()
  ]);

  let airports: Prisma.AirportCreateInput[] = mergeAirports(airportsArrays);

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
      connections: (airport.connections as Prisma.ConnectionCreateInput[])
        .filter((connection) => !unusableAirportCodes.includes(connection.code))
    }));

  // Delete all airports and save new ones
  await prisma.$transaction([
    prisma.airport.deleteMany(),
    prisma.airport.createMany({
      data: airports
    })
  ]);

  console.log('Saved Airports to DB!');
}

run();
