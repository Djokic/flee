import { Airport } from '@common/airports';
import { FareData } from '@common/fares';
import { Operator } from '@common/types';

export const getConnectionsForOperator = (airport: Airport, operator: Operator) => {
  return airport.connections.filter((connection) => operator === connection.split('.')[1] as Operator);
};

export const mergeAirports = (airportsArrays: Airport[][]): Airport[] => {
  const airportsMap: Record<string, Airport> = {};
  airportsArrays.reduce((acc, curr) => [...acc, ...curr], []).forEach((airport) => {
    if (!airportsMap[airport.code]) {
      airportsMap[airport.code] = airport;
    } else {
      airportsMap[airport.code] = {
        ...airportsMap[airport.code],
        connections: [
          ...airportsMap[airport.code].connections,
          ...airport.connections
        ]
      };
    }
  });

  return Object.values(airportsMap);
};

export const getUniqueFares = (fares: FareData[]): FareData[] => {
  const faresMap: Record<string, FareData> = {};
  fares.forEach((fare) => {
    if (!faresMap[fare.origin + fare.destination + fare.date]) {
      faresMap[fare.origin + fare.destination + fare.date] = fare;
    }
  });

  return Object.values(faresMap);
};

export function parseConnection (connectionString: string) {
  const [code, operator] = connectionString.split('.');
  return [code, operator as Operator];
}
