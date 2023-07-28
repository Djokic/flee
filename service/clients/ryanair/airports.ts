import { Airport } from '@common/airports';
import { Operator } from '@common/types';
import { getName } from 'country-list';

type AirportResponse = {
  aliases: string[],
  base: boolean,
  categories: string[],
  cityCode: string,
  coordinates: {
    latitude: number,
    longitude: number
  }
  countryCode: string,
  currencyCode: string,
  iataCode: string,
  name: string,
  priority: number,
  regionCode: string,
  routes: string[],
  seasonalRoutes: string[],
  seoName: string,
  timeZone: string
}

export async function getAirportsWithRoutes (): Promise<Airport[]> {
  console.log('[RyanAir] Getting Airports');
  const request = await fetch('https://www.ryanair.com/api/views/locate/3/airports/en/active');
  const response: AirportResponse[] = await request.json();
  return response.map((airport) => ({
    id: airport.iataCode,
    code: airport.iataCode,
    name: airport.name,
    countryCode: airport.countryCode,
    countryName: getName(airport.countryCode.toUpperCase()) || '',
    latitude: airport.coordinates.latitude,
    longitude: airport.coordinates.longitude,
    connections: airport.routes
      .filter((route) => route.startsWith('airport:'))
      .map((route) => {
        const code = route.replace('airport:', '');
        return `${code}.${Operator.RYANAIR}`;
      })
  }));
}
