import { wait } from 'helpers/wait';
import { Airport, Operator } from '@common/types';

import { transformQueryToQueryString } from './helpers';

type AirportResponse = {
  code: string,
  name: string;
  timeZone: string;
  country: {
    name: string;
  },
  city: {
    name: string;
  }
  coordinates: {
    latitude: number,
    longitude: number
  }
}

const AirportsQuery = `
  fields {
    code
    name
    timeZone
    city {
      name
    }
    coordinates {
      latitude
      longitude
    }
    country {
      name
    }
  }
`;

type RouteResponse = {
  arrivalAirport: AirportResponse;
  operator: string;
}

const RouteQuery = `
  fields {
    operator
    arrivalAirport {
      code
    }
  }
`;

async function getAirports (): Promise<AirportResponse[]> {
  const res = await fetch(`https://www.ryanair.com/api/locate/v5/airports?${transformQueryToQueryString(AirportsQuery)}`);
  return await res.json() as AirportResponse[];
}

async function getRoutesForAirport (departureAirportCode: string): Promise<RouteResponse[]> {
  const res = await fetch(`https://www.ryanair.com/api/locate/v5/routes?departureAirportCode=${departureAirportCode}&${transformQueryToQueryString(RouteQuery)}`);
  return await res.json() as RouteResponse[];
}

export async function getAirportsWithRoutes (): Promise<Airport[]> {
  console.log('[RyanAir] Getting Airports');
  const airports: Airport[] = [];
  const airportsResponse = await getAirports();

  const addAirport = async (airport: AirportResponse) => {
    await wait(500);
    console.log(`[RyanAir] Getting Connections -> ${airport.code}`);
    const routesResponse = await getRoutesForAirport(airport.code);
    airports.push({
      code: airport.code,
      name: airport.name,
      country: airport.country.name,
      latitude: airport.coordinates.latitude,
      longitude: airport.coordinates.longitude,
      connections: routesResponse.map((route) => ({
        code: route.arrivalAirport.code,
        operator: Operator.RYANAIR
      }))
    });
  };

  for (const airport of airportsResponse) {
    await addAirport(airport);
  }
  return airports;
}
