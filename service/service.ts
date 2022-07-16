import {Flight} from "./clients";
import * as RyanAir from "./clients/ryanair";
import * as WizzAir from "./clients/wizzair";

import { formatDate } from "./helpers/date";

async function run() {
  const rAirports = await RyanAir.getAirportsWithRoutes(['INI', 'BEG']);
  const wAirports = await WizzAir.getAirportsWithRoutes(['INI', 'BEG']);

  const flights: Flight[] = [];

  for (const airport of rAirports) {
    for (const connection of airport.connections) {
      console.log(`Getting RyanAir - ${airport.code} -> ${connection.code}`)
      const dataOut = await RyanAir.getFlights({
        origin: airport.code,
        destination: connection.code,
        startDate: formatDate(new Date()),
        lookupDays: 30
      });

      console.log(`Getting RyanAir - ${connection.code} -> ${airport.code}`)
      const dataIn = await RyanAir.getFlights({
        origin: connection.code,
        destination: airport.code,
        startDate: formatDate(new Date()),
        lookupDays: 30
      });

      flights.push(dataOut);
      flights.push(dataIn);
    }
  }

  for (const airport of wAirports) {
    for (const connection of airport.connections) {
      console.log(`Getting WizzAir - ${airport.code} -> ${connection.code}`)
      const dataOut = await WizzAir.getFlights({
        origin: airport.code,
        destination: connection.code,
        startDate: formatDate(new Date()),
        lookupDays: 30
      });

      console.log(`Getting WizzAir - ${connection.code} -> ${airport.code}`)
      const dataIn = await WizzAir.getFlights({
        origin: connection.code,
        destination: airport.code,
        startDate: formatDate(new Date()),
        lookupDays: 30
      });

      flights.push(dataOut);
      flights.push(dataIn);
    }
  }

  console.log(flights);
}

run();

