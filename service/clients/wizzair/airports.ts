import { Axios } from 'axios';
import { Airport, Operator } from '@common/types';

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

async function getAirports (axios: Axios): Promise<GetAirportsResponse> {
  const { data } = await axios.get('/asset/map?languageCode=en-gb');
  return data as GetAirportsResponse;
}

export async function getAirportsWithRoutes (axios: Axios): Promise<Airport[]> {
  console.log('[WizzAir] Getting Airports');
  const airports: Airport[] = [];
  const airportsResponse = await getAirports(axios);

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
