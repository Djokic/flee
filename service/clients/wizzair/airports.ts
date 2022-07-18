import { Airport, Operator } from '../types';
import { createHeaders, getApiUrl, getNewSession, logout } from './auth';

type Connection = {
  iata: string,
  isDomestic: boolean,
  isNew: boolean,
  operationStartDate: string,
  rescueEndDate: string,
}

type AirportResponse = {
  aliases: string[],
  categories: string[]
  connections: Connection[]
  countryCode: string,
  countryName: string,
  currencyCode: string,
  iata: string,
  isExcludedFromGeoLocation: boolean,
  isFakeStation: boolean
  latitude: number,
  longitude: number,
  rank: number,
  shortName: string,
}

type GetAirportsResponse = {
  cities: AirportResponse[]
}

async function getAirports (apiUrl: string): Promise<GetAirportsResponse> {
  const { sessionId, verificationToken } = await getNewSession(apiUrl);
  const headers = createHeaders(sessionId, verificationToken);
  const res = await fetch(`${apiUrl}/asset/map?languageCode=en-gb`, { headers });
  await logout(apiUrl, headers);
  return await res.json() as GetAirportsResponse;
}

export async function getAirportsWithRoutes (apiUrl: string): Promise<Airport[]> {
  console.log('[WizzAir] Getting Airports');
  const airports: Airport[] = [];
  const airportsResponse = await getAirports(apiUrl);

  const addAirport = (airport: AirportResponse) => {
    airports.push({
      code: airport.iata,
      name: airport.shortName.trim(),
      country: airport.countryName,
      latitude: airport.latitude,
      longitude: airport.longitude,
      connections: airport.connections.map((connection) => ({
        code: connection.iata,
        operator: Operator.WIZZAIR
      }))
    });
  };

  for (const airport of airportsResponse.cities) {
    addAirport(airport);
  }

  return airports;
}
