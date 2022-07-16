import {Airport, Flight} from "./types";

export async function wait(milliseconds: number) {
  return await new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  })
}

export const mergeAirports = (airportsArrays: Airport[][]): Airport[] => {
  const airportsMap: Record<string, Airport> = {};
  airportsArrays.reduce((acc, curr) => [...acc, ...curr], []).forEach((airport) => {
    if (!airportsMap[airport.code]) {
      airportsMap[airport.code] = airport;
    } else {
      airportsMap[airport.code] = {
        ...airportsMap[airport.code],
        connections: [...airportsMap[airport.code].connections, ...airport.connections]
      }
    }
  });

  return Object.values(airportsMap);
}

export const mergeFlights = (flightsArrays: Flight[][]): Flight[] => {
  const flightsMap: Record<string, Flight> = {};
  flightsArrays
    .reduce((acc, curr) => [...acc, ...curr], [])
    .forEach((flight) => {
      const key = `${flight.origin}-${flight.destination}`;
      if (!flightsMap[key]) {
        flightsMap[key] = flight;
      } else {
        flightsMap[key] = {
          ...flightsMap[key],
          fares: [...flightsMap[key].fares, ...flight.fares]
            .sort((fare1, fare2) => {
              return Number(new Date(fare1.date)) - Number(new Date(fare2.date));
            })
        }
      }
    });

  return Object.values(flightsMap);
}