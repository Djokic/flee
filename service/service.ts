require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

import {Flight, mergeAirports, mergeFlights } from "./clients";
import { RyanAirClient } from "./clients/ryanair";
import { WizzAirClient } from "./clients/wizzair";

async function run() {
  const airportCodes = process.env.AIRPORTS?.split(',');
  const lookupDays = parseInt(process.env.LOOKUP_DAYS || '30');

  const ryanAirClient = new RyanAirClient({ airportCodes, lookupDays });
  const wizzAirClient = new WizzAirClient({ airportCodes, lookupDays });

  await Promise.all([
    ryanAirClient.getData(),
    wizzAirClient.getData()
  ]);

  const airports = mergeAirports([ryanAirClient.airports, wizzAirClient.airports]);
  const flights: Flight[] = mergeFlights([ryanAirClient.flights, wizzAirClient.flights]);

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

