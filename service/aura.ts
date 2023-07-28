import neo4j from 'neo4j-driver';
import { prisma } from './helpers/prisma';

import { Airport, Fare } from '@prisma/client';

const driver = neo4j.driver(
  'neo4j+s://c3e206d8.databases.neo4j.io',
  neo4j.auth.basic('neo4j', 'NN2mToVhefiC0HqQsturGnHKOwvhy-yMz-VytXPkXKw')
);

async function createAirports () {
  const session = driver.session();
  const airports: Airport[] = await prisma.airport.findMany();

  // Since Neo4j doesn't support arrays of objects, we need to convert the connections array to an array of strings
  const formattedAirports = airports.map((airport) => ({
    ...airport,
    connections: airport.connections.map(({ code, operator }) => `${code}.${operator}`)
  }));

  // Prepare a Cypher query
  const query = `
  UNWIND $airports AS airport
  CREATE (a:Airport {id: airport.id, code: airport.code, name: airport.name, countryName: airport.countryName, countryCode: airport.countryCode, latitude: airport.latitude, longitude: airport.longitude, connections: airport.connections })
  RETURN a
`;

  // Run the query with the airports array as a parameter
  const result = await session.run(query, { airports: formattedAirports });

  // Handle the result
  result.records.forEach((record) => {
    const createdAirport = record.get('a').properties;
    console.log(createdAirport);
  });

  // Don't forget to close the session
  await session.close();
}

async function deleteAirports () {
  const session = driver.session();
  const query = `
    MATCH (a:Airport)
    DETACH DELETE a
  `;

  // Run the query
  const result = await session.run(query);

  console.log('All airports have been deleted.');

  // Don't forget to close the session
  await session.close();
}

async function listAirports () {
  // Assume you have a Neo4j session (see previous examples)
  const session = driver.session();

  // Prepare a Cypher query
  const query = `
    MATCH (a:Airport)
    RETURN a
  `;

  // Run the query
  const result = await session.run(query);

  // Extract records from the result
  const airports = result.records.map(record => record.get('a').properties);

  console.log('List of airports:', airports);

  // Don't forget to close the session
  await session.close();
}

async function createFares () {
  const session = driver.session();
  const batchSize = 1000;
  const faresCount = await prisma.fare.count();
  let currentBatchIndex = 0;

  while (currentBatchIndex * batchSize < faresCount) {
    const fares: Fare[] = await prisma.fare.findMany({
      skip: currentBatchIndex * batchSize,
      take: batchSize
    });

    const formatted = fares.map(fare => ({
      ...fare,
      date: fare.date.toISOString()
    }));

    const tx = session.beginTransaction(); // Start a new transaction

    // Prepare a Cypher query
    const query = `
      UNWIND $fares AS fare
      MATCH (origin:Airport {code: fare.origin})
      MATCH (destination:Airport {code: fare.destination})
      MERGE (origin)-[f:FARE {date: datetime(fare.date), price: fare.price, currency: fare.currency, operator: fare.operator}]->(destination)
      RETURN f
    `;

    // Run the query with the fares array as a parameter
    const result = await tx.run(query, { fares: formatted });

    await tx.commit(); // Commit the transaction

    // Handle the result
    result.records.forEach((record) => {
      const createdFare = record.get('f').properties;
      console.log(createdFare);
    });

    currentBatchIndex++;

    console.log(`Created ${currentBatchIndex * batchSize} fares.`);
  }

  // Don't forget to close the session
  await session.close();
}

async function getReturnFares (origin: string, destination: string, minDuration: number, maxDuration: number): Promise<any[]> {
  const session = driver.session();

  const query = `
MATCH (start:Airport {code: $origin})
MATCH (end:Airport {code: $destination})
MATCH outboundPath=allShortestPaths((start)-[:FARE*..2]-(end))
WITH start, end, outboundPath, [r in relationships(outboundPath) | r.properties] AS outbound
MATCH inboundPath=allShortestPaths((end)-[:FARE*..2]-(start))
WITH outbound, outboundPath, inboundPath, [r in relationships(inboundPath) | r.properties] AS inbound
WHERE inbound[0].date > outbound[-1].date + duration({days: $minDuration})
AND inbound[0].date < outbound[-1].date + duration({days: $maxDuration})
RETURN outbound AS outboundFares, inbound AS inboundFares, reduce(totalPrice = 0, fare in relationships(outboundPath) + relationships(inboundPath) | totalPrice + fare.properties.price) AS totalPrice
ORDER BY totalPrice ASC
LIMIT 10

  `;

  console.time('query');
  const result = await session.run(query, { origin, destination, minDuration, maxDuration });
  console.timeEnd('query');
  await session.close();

  return result.records.map(record => ({
    outboundFares: record.get('outboundFares'),
    inboundFares: record.get('inboundFares'),
    totalPrice: record.get('totalPrice')
  }));
}

async function getOneWayFares (origin: string, destination: string) {
  const session = driver.session();

  const query = `
    MATCH (origin:Airport {code: $origin})-[fare:FARE]->(destination:Airport {code: $destination})
    RETURN fare
    ORDER BY fare.price ASC
    LIMIT 10
  `;

  const result = await session.run(query, { origin, destination });
  session.close();

  return result.records.map((record) => {
    const fare = record.get('fare');
    return {
      id: fare.identity.toString(),
      price: fare.properties.price,
      date: fare.properties.date,
      currency: fare.properties.currency,
      operator: fare.properties.operator
    };
  });
}

// getReturnFares('INI', 'CFU', 2, 9).then((fares) => {
// console.log(
//   fares[0].outboundFares[0].date,
//   fares[0].inboundFares[0].date
// );
// console.log(fares[0].outboundFares[0]);
// });

// getOneWayFares('CFU', 'INI').then((fares) => {
//   console.log(fares);
// });

async function deleteAllFares () {
  const session = driver.session();
  const query = `
    CALL apoc.periodic.iterate(
    "MATCH ()-[f:FARE]-() RETURN f",
    "DETACH DELETE f",
    {batchSize:10000}
)
  `;

  // Run the query
  const result = await session.run(query);

  console.log('All fares have been deleted.');

  // Don't forget to close the session
  await session.close();
}

deleteAllFares();
