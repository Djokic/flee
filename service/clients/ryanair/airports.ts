import { Prisma, Operator } from '@prisma/client';
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

export async function getAirportsWithRoutes (): Promise<Prisma.AirportCreateInput[]> {
  const request = await fetch('https://www.ryanair.com/api/views/locate/3/airports/en/active');
  const response: AirportResponse[] = await request.json();
  return response.map((airport) => ({
    code: airport.iataCode,
    name: airport.name,
    countryCode: airport.countryCode,
    countryName: getName(airport.countryCode.toUpperCase()) || '',
    latitude: airport.coordinates.latitude,
    longitude: airport.coordinates.longitude,
    connections: airport.routes
      .filter((route) => route.startsWith('airport:'))
      .map((route) => ({
        code: route.replace('airport:', ''),
        operator: Operator.RYANAIR
      }))
  }));
}
