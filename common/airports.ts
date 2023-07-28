import { Session } from 'neo4j-driver';

export type Airport = {
  id: string
  code: string
  name: string
  countryName: string
  countryCode: string
  latitude: number
  longitude: number
  connections: string[]
}

type GetAllAirportsInput = {
  session: Session;
}

export async function getAllAirports({ session }: GetAllAirportsInput): Promise<Airport[]> {
  const query = `
    MATCH (a:Airport)
    RETURN a AS airport
  `;

  const result = await session.run(query);

  return result.records.map(record => record.get('airport').properties);
}

type CreateOrUpdateAirportsInput = {
  session: Session;
  airports: Airport[];
}

export async function createOrUpdateAirports({ session, airports}: CreateOrUpdateAirportsInput) {
  const query = `
    UNWIND $airports AS airport
    MERGE (a:Airport {code: airport.code})
    SET a.name = airport.name,
        a.countryName = airport.countryName,
        a.countryCode = airport.countryCode,
        a.latitude = airport.latitude,
        a.longitude = airport.longitude,
        a.connections = airport.connections
  `;

  return session.run(query, { airports });
}