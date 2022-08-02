/* eslint-disable import/first */
require('dotenv').config();

import { Airport, Operator } from 'clients';
import { RyanAirClient } from 'clients/ryanair';
import { WizzAirClient } from 'clients/wizzair';
import { loadAirports, saveFares } from 'helpers/db';

async function run () {
  const airportCodes: string[] = process.env.AIRPORTS?.split(',') || [];
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');
  const operator = process.argv[2] as Operator;

  const OperatorClient = {
    [Operator.WIZZAIR]: WizzAirClient,
    [Operator.RYANAIR]: RyanAirClient
  }[operator];

  if (!OperatorClient) {
    throw new Error('Missing operator');
  }

  const client = new OperatorClient({ lookupDays });

  const airports: Airport[] = await loadAirports();
  const filteredAirports = airports.filter(({ code }) => airportCodes.includes(code));

  await client.getFares(filteredAirports);

  await saveFares(client.fares, operator);
  console.log('Saved Fares to DB!');
}

run();
