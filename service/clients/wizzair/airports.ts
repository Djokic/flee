import { Airport } from '@common/airports';
import { Operator } from '@common/types';
import { AxiosResponse } from 'axios';

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

type FetcherFn = (url: string) => Promise<AxiosResponse>;

async function getAirports (fetcher: FetcherFn): Promise<GetAirportsResponse> {
  const { data } = await fetcher('/asset/map?languageCode=en-gb');
  return data as GetAirportsResponse;
}

export async function getAirportsWithRoutes (fetcher: FetcherFn): Promise<Airport[]> {
  console.log('[WizzAir] Getting Airports');
  const response = await getAirports(fetcher);

  return response.cities.map((airport) => ({
    id: airport.iata,
    code: airport.iata,
    name: airport.shortName.trim(),
    countryName: airport.countryName,
    countryCode: airport.countryCode,
    latitude: airport.latitude,
    longitude: airport.longitude,
    connections: airport.connections.map((connection) => {
      return `${connection.iata}.${Operator.WIZZAIR}`;
    })
  }));
}
