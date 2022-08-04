import { Airport, Fare, Operator } from './types';

export async function wait (milliseconds: number) {
  return await new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export const getConnectionsForOperator = (airport: Airport, operator: Operator) => {
  return airport.connections.filter((connection) => operator === connection.operator);
};

export const mergeAirports = (airportsArrays: Airport[][]): Airport[] => {
  const airportsMap: Record<string, Airport> = {};
  airportsArrays.reduce((acc, curr) => [...acc, ...curr], []).forEach((airport) => {
    if (!airportsMap[airport.code]) {
      airportsMap[airport.code] = airport;
    } else {
      airportsMap[airport.code] = {
        ...airportsMap[airport.code],
        connections: [...airportsMap[airport.code].connections, ...airport.connections]
      };
    }
  });

  return Object.values(airportsMap);
};

export const getUniqueFares = (fares: Fare[]): Fare[] => {
  const faresMap: Record<string, Fare> = {};
  fares.forEach((fare) => {
    if (!faresMap[fare.origin + fare.destination + fare.date]) {
      faresMap[fare.origin + fare.destination + fare.date] = fare;
    }
  });

  return Object.values(faresMap);
};
