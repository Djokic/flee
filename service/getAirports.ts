/* eslint-disable import/first */
require('dotenv').config();

import { Airport } from '@common/types';
import { mergeAirports } from 'helpers/common';

import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';
import { prisma } from './helpers/prisma';

async function run () {
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const ryanAirClient = new RyanAirClient({ lookupDays });
  const wizzAirClient = new WizzAirClient({ lookupDays });

  await Promise.all([
    ryanAirClient.getAirports(),
    wizzAirClient.getAirports()
  ]);

  const airports: Airport[] = mergeAirports([ryanAirClient.airports, wizzAirClient.airports]);

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
