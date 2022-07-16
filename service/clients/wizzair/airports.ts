import {getNewSession, logout} from "./auth";

import {Airport, Operator} from "../types";

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

async function getAirports(): Promise<GetAirportsResponse> {
  const headers = await getNewSession();
  const res = await fetch("https://be.wizzair.com/12.11.2/Api/asset/map?languageCode=en-gb", {headers});
  await logout(headers);
  return await res.json() as GetAirportsResponse;
}


export async function getAirportsWithRoutes(codes?: string[]): Promise<Airport[]> {
  console.log(`Getting Airports [WizzAir]`);
  const airports: Airport[] = [];
  const airportsResponse = await getAirports();

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
    })
  };

  for (const airport of airportsResponse.cities) {
    if (!codes) {
      addAirport(airport);
    } else if (codes?.includes(airport.iata)) {
      addAirport(airport)
    }
  }
  return airports;
}