require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

import {Airport, Flight, Operator} from "./clients";
import * as RyanAir from "./clients/ryanair";
import * as WizzAir from "./clients/wizzair";

import {formatDate} from "./helpers/date";

const mergeAirports = (airportsArrays: Airport[][]): Airport[] => {
  const airportsMap: Record<string, Airport> = {};
  airportsArrays.reduce((acc, curr) => [...acc, ...curr], []).forEach((airport) => {
    if (!airportsMap[airport.code]) {
      airportsMap[airport.code] = airport;
    } else {
      airportsMap[airport.code] = {
        ...airportsMap[airport.code],
        connections: [...airportsMap[airport.code].connections, ...airport.connections]
      }
    }
  });

  return Object.values(airportsMap);
}

const mergeFlights = (flightsArrays: Flight[][]): Flight[] => {
  const flightsMap: Record<string, Flight> = {};
  flightsArrays
    .reduce((acc, curr) => [...acc, ...curr], [])
    .forEach((flight) => {
      const key = `${flight.origin}-${flight.destination}`;
      if (!flightsMap[key]) {
        flightsMap[key] = flight;
      } else {
        flightsMap[key] = {
          ...flightsMap[key],
          fares: [...flightsMap[key].fares, ...flight.fares]
            .sort((fare1, fare2) => {
              return Number(new Date(fare1.date)) - Number(new Date(fare2.date));
            })
        }
      }
  });

  return Object.values(flightsMap);
}

async function getDataForOperator(client: any) {
  const airportCodes = process.env.AIRPORTS?.split(',');
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const airports: Airport[] = await client.getAirportsWithRoutes();
  const filteredAirports = airports.filter(({ code }) => airportCodes?.includes(code));

  const flights: Flight[] = [];
  for (const airport of filteredAirports) {
    for (const connection of airport.connections) {
      const dataOut = await client.getFlights({
        origin: airport.code,
        destination: connection.code,
        startDate: formatDate(new Date()),
        lookupDays
      });

      const dataIn = await client.getFlights({
        origin: connection.code,
        destination: airport.code,
        startDate: formatDate(new Date()),
        lookupDays
      });

      flights.push(dataOut);
      flights.push(dataIn);
    }
  }

  return {airports, flights};
}

async function run() {
  const data = await Promise.all([
    getDataForOperator(RyanAir),
    getDataForOperator(WizzAir)
  ]);

  const airports = mergeAirports(data.map((item) => item.airports));
  const flights: Flight[] = mergeFlights(data.map((item) => item.flights));

  const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  });

  try {
    await client.connect();
    const db = client.db('fle');

    const airportsCollection = db.collection('airports');
    if (await airportsCollection.countDocuments() > 0) {
      await airportsCollection.drop();
    }
    await airportsCollection.insertMany(airports);

    const flightsCollection = db.collection('flights');
    if (await flightsCollection.countDocuments() > 0) {
      await flightsCollection.drop();
    }
    await flightsCollection.insertMany(flights);
  } catch (e) {
    console.log("MongoError ->", e);
  } finally {
    await client.close();
  }

  console.log('Saved to DB!');
}

run();

