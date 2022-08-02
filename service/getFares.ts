/* eslint-disable import/first */
require('dotenv').config();

import { Airport } from 'clients';
import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';
import { loadAirports, saveFares } from 'helpers/db';

async function run () {
  const airportCodes: string[] = process.env.AIRPORTS?.split(',') || [];
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const ryanAirClient = new RyanAirClient({ lookupDays });
  const wizzAirClient = new WizzAirClient({ lookupDays });

  const airports: Airport[] = await loadAirports();
  const filteredAirports = airports.filter(({ code }) => airportCodes.includes(code));

  await Promise.all([
    // ryanAirClient.getFares(filteredAirports),
    wizzAirClient.getFares(filteredAirports)
  ]);

  await saveFares([...ryanAirClient.fares, ...wizzAirClient.fares]);
  console.log('Saved Fares to DB!');
}

run();
