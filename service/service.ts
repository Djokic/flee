require('dotenv').config();

import { Airport, mergeAirports } from 'clients';
import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';
import { saveAirports, saveFares } from 'helpers/db';



async function run () {
  const airportCodes: string[] = process.env.AIRPORTS?.split(',') || [];
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const ryanAirClient = new RyanAirClient({ lookupDays });
  const wizzAirClient = new WizzAirClient({ lookupDays });

  await Promise.all([
    ryanAirClient.getAirports(),
    wizzAirClient.getAirports()
  ]);

  const airports: Airport[] = mergeAirports([ryanAirClient.airports, wizzAirClient.airports]);
  const filteredAirports = airports.filter(({ code }) => airportCodes.includes(code));

  await saveAirports(airports);
  console.log('Saved Airports to DB!');

  await Promise.all([
    ryanAirClient.getFares(filteredAirports),
    wizzAirClient.getFares(filteredAirports)
  ]);

  await saveFares([...ryanAirClient.fares, ...wizzAirClient.fares]);
  console.log('Saved Fares to DB!');
}

run();
