import { Axios } from 'axios';
import { wait } from 'helpers/wait';
import { Airport, Operator } from '@common/types';

type AirportResponse = {
  AirportName: string;
  Description: string;
  ItemName: string;
}

type GetAirportsResponse = {
  Airports: AirportResponse[];
}

type GetRoutesResponse = {
  direct: string[];
  klOperated: string[];
  other: string[];
  selfConnect: string[]
}

async function getAirports (axios: Axios): Promise<AirportResponse[]> {
  const { data }: { data: GetAirportsResponse } = await axios.get('https://www.transavia.com/en-EU/api/airports/?selfConnect=true');
  return data.Airports as AirportResponse[];
}

async function getRoutesForAirport (axios: Axios, departureAirportCode: string): Promise<string[]> {
  const { data }: { data: GetRoutesResponse } = await axios.get(`https://www.transavia.com/en-EU/api/SearchPanelDestinations/?departureAirport=${departureAirportCode}&selfConnect=true`);
  return data.direct;
}

export async function getAirportsWithRoutes (axios: Axios): Promise<Airport[]> {
  console.log('[Transavia] Getting Airports');
  const airports: Airport[] = [];
  const airportsResponse = await getAirports(axios);

  const addAirport = async (airport: AirportResponse) => {
    await wait(500);
    console.log(`[Transavia] Getting Connections -> ${airport.ItemName}`);
    const routesResponse = await getRoutesForAirport(axios, airport.ItemName);
    airports.push({
      code: airport.ItemName,
      name: airport.AirportName,
      country: '',
      latitude: NaN,
      longitude: NaN,
      connections: routesResponse.map((route) => ({
        code: route,
        operator: Operator.TRANSAVIA
      }))
    });
  };

  for (const airport of airportsResponse) {
    await addAirport(airport);
  }
  return airports;
}
