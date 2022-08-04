/* eslint-disable import/first */
require('dotenv').config();

import { Airport, Operator } from './clients';
import { RyanAirClient } from './clients/ryanair';
import { WizzAirClient } from './clients/wizzair';
import { getArguments } from './helpers/arguments';
import { loadAirports, saveFares } from './helpers/db';
import { ServiceStatusCode, setStatus } from './helpers/status';

async function run () {
  const startAt = Date.now();
  const {
    operator,
    allAirports
  } = getArguments() as { operator: Operator, allAirports: boolean };
  const airportCodes: string[] = process.env.AIRPORTS?.split(',') || [];
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const { insertedId } = await setStatus({
    code: ServiceStatusCode.IN_PROGRESS,
    operator,
    startAt,
    details: allAirports ? 'all' : airportCodes.join(',')
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

    const airports: Airport[] = await loadAirports();
    const filteredAirports =
      allAirports
        ? airports
        : airports.filter(({ code }) => airportCodes.includes(code));

    await client.getFares(filteredAirports);

    await saveFares(client.fares, operator);
    await setStatus({
      _id: insertedId,
      code: ServiceStatusCode.SUCCESS,
      operator,
      startAt,
      endAt: Date.now(),
      details: allAirports ? 'all' : airportCodes.join(',')
    });
    console.log('Saved Fares to DB!');
  } catch (error: any) {
    await setStatus({
      _id: insertedId,
      code: ServiceStatusCode.ERROR,
      operator,
      startAt,
      endAt: Date.now(),
      error: error?.message,
      details: allAirports ? 'all' : airportCodes.join(',')
    });
  }
}

run();
