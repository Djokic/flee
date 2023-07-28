import {addDays, endOfDay, startOfDay, startOfTomorrow} from 'date-fns';
import {PathSegment, Session} from 'neo4j-driver';
import {SortType} from "../web/helpers/sort";
import {Operator} from "./types";

type GetFaresInput = {
  session: Session;
  origins?: string[];
  destinations?: string[];
  maxStops?: number;
  dates?: Date[];
  sortType?: SortType;
  limit?: number;
  delayBetweenFaresInHours?: number;
}

function getQueryDates(dates?: Date[]) {
  // By default, set start date to tomorrow and end date to 60 days from now
  let startDate: Date = startOfTomorrow();
  let endDate: Date = addDays(startDate, 60);

  // If only one date is provided, set start date to that date and end date to the end of that day
  if (dates?.length === 1) {
    startDate = startOfDay(dates[0]);
    endDate = endOfDay(startDate);
  }

  // If two dates are provided, set start date to the first date and end date to the end of the second date
  if (dates?.length === 2) {
    startDate = startOfDay(dates[0]);
    endDate = endOfDay(dates[1]);
  }

  return {startDate, endDate};
}

export type FareData = {
  id: string;
  origin: string;
  originName?: string;
  destination: string;
  destinationName?: string;
  price: number;
  date: Date;
  currency: string;
  operator: Operator;
}

function mapPathToFares(result: any): FareData[] {
  return result.records.map((record: { get: (arg0: string) => any; }) => {
    const path = record.get('path');
    const {segments} = path;
    return segments.map((segment: PathSegment) => {
      const {start, end, relationship} = segment;
      return {
        origin: start.properties.code,
        destination: end.properties.code,
        ...relationship.properties
      } as FareData;
    });
  });
}

async function getFaresWithStops(params: GetFaresInput) {
  const minDelayBetweenFares = params.delayBetweenFaresInHours || 0;
  const maxDelayBetweenFares = 24 + minDelayBetweenFares;

  const query = `
    MATCH (start:Airport) WHERE start.code IN $origins
    MATCH (end:Airport) WHERE end.code IN $destinations
    MATCH p=allShortestPaths((start)-[:FARE*..${params.maxStops}]->(end))
    WITH p, relationships(p) AS rels
    WHERE 
        all(i IN range(1, size(rels) - 1) WHERE datetime(rels[i].date) >= datetime(rels[i-1].date) + duration('PT${minDelayBetweenFares}H'))
        AND all(i IN range(1, size(rels) - 1) WHERE datetime(rels[i].date) <= datetime(rels[i-1].date) + duration('PT${maxDelayBetweenFares}H'))
        AND datetime(rels[0].date) >= datetime($startDate)
        AND datetime(rels[-1].date) <= datetime($endDate) + duration('PT${minDelayBetweenFares}H')
    RETURN p AS path
    ORDER BY ${params.sortType === 'price' ? 'reduce(totalPrice = 0, r in relationships(p) | totalPrice + r.price), head(relationships(p)).date' : 'head(relationships(p)).date, reduce(totalPrice = 0, r in relationships(p) | totalPrice + r.price)'} ASC
    LIMIT ${params.limit}
  `;

  const {startDate, endDate} = getQueryDates(params.dates);

  const result =  await params.session.run(query, {
    origins: params.origins,
    destinations: params.destinations,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  });

  return result.records.map((record: { get: (arg0: string) => any; }) => {
    const path = record.get('path');
    const {segments} = path;
    return segments.map((segment: PathSegment) => {
      const {start, end, relationship} = segment;
      return {
        origin: start.properties.code,
        originName: start.properties.name,
        destination: end.properties.code,
        destinationName: end.properties.name,
        ...relationship.properties
      } as FareData;
    });
  });
}

export async function getFaresFromOrigin(params: GetFaresInput) {
  const query = `
    MATCH (start:Airport)-[r]->(end:Airport)
    WHERE start.code IN $origins
      AND datetime(r.date) >= datetime($startDate)
      AND datetime(r.date) <= datetime($endDate)
    RETURN start AS origin, end AS destination, r AS fare
    ORDER BY ${params.sortType === 'price' ? 'r.price' : 'r.date'} ASC
    LIMIT ${params.limit}
  `;

  const {startDate, endDate} = getQueryDates(params.dates);

  const result = await params.session.run(query, {
    origins: params.origins,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  });

  return result.records.map((record) => ({
    origin: record.get('origin').properties.code,
    destination: record.get('destination').properties.code,
    ...record.get('fare').properties
  }));
}

export async function getFaresToDestination(params: GetFaresInput) {
  const query = `
    MATCH (start:Airport)-[r]->(end:Airport)
    WHERE end.code IN $destinations
      AND datetime(r.date) >= datetime($startDate)
      AND datetime(r.date) <= datetime($endDate)
    RETURN start AS origin, end AS destination, r AS fare
    ORDER BY ${params.sortType === 'price' ? 'r.price' : 'r.date'} ASC
    LIMIT ${params.limit}
  `;

  const {startDate, endDate} = getQueryDates(params.dates);

  const result = await params.session.run(query, {
    destinations: params.destinations,
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString()
  });

  return result.records.map((record) => ({
    origin: record.get('origin').properties.code,
    destination: record.get('destination').properties.code,
    ...record.get('fare').properties
  }));
}


export async function getFares(params: GetFaresInput): Promise<any[]> {
  const defaultParams = {
    origins: [],
    destinations: [],
    maxStops: 2,
    delayBetweenFaresInHours: 4,
    sortBy: 'price',
    limit: 100
  };

  const combinedParams = {...defaultParams, ...params};
  const { origins, destinations } = combinedParams;

  // If no origins or destinations are provided, return empty array
  if (!origins?.length && !destinations?.length) {
    return [];
  }

  // If only origins are provided, return fares from origin
  if (origins?.length && !destinations?.length) {
    return getFaresFromOrigin(combinedParams);
  }

  // If only destinations are provided, return fares to destination
  if (!origins?.length && destinations?.length) {
    return getFaresToDestination(combinedParams);
  }

  // If both origins and destinations are provided, return direct fares or with possible stops
  return getFaresWithStops(combinedParams);
}


type CreateOrUpdateFaresInput = {
  session: Session;
  fares: {
    id: string;
    origin: string;
    destination: string;
    price: number;
    date: string
    currency: string;
    operator: string;
  }[];
}

export async function createOrUpdateFares({session, fares}: CreateOrUpdateFaresInput): Promise<void> {
  const query = `
    UNWIND $fares AS fare
    MATCH (origin:Airport {code: fare.origin})
    MATCH (destination:Airport {code: fare.destination})
    MERGE (origin)-[f:FARE {id: fare.id}]->(destination)
    ON CREATE SET f.price = fare.price, f.date = datetime(fare.date), f.currency = fare.currency, f.operator = fare.operator, f.id = fare.id
    ON MATCH SET f.price = fare.price
  `;

  await session.run(query, {fares});
}


type DeleteFaresInput = {
  session: Session;
}

async function deleteAllFares({session}: DeleteFaresInput): Promise<void> {
  const query = `
    CALL apoc.periodic.iterate(
      "MATCH ()-[f:FARE]-() RETURN f",
      "DETACH DELETE f",
      {batchSize:10000}
    )
  `;

  await session.run(query);
}