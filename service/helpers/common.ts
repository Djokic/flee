import { Prisma, Operator, Connection } from '@prisma/client';

export const getConnectionsForOperator = (airport: Prisma.AirportCreateInput, operator: Operator) => {
  return (airport.connections as Connection[]).filter((connection) => operator === connection.operator);
};

export const mergeAirports = (airportsArrays: Prisma.AirportCreateInput[][]): Prisma.AirportCreateInput[] => {
  const airportsMap: Record<string, Prisma.AirportCreateInput> = {};
  airportsArrays.reduce((acc, curr) => [...acc, ...curr], []).forEach((airport) => {
    if (!airportsMap[airport.code]) {
      airportsMap[airport.code] = airport;
    } else {
      airportsMap[airport.code] = {
        ...airportsMap[airport.code],
        connections: [...(airportsMap[airport.code].connections as Connection[]), ...(airport.connections as Connection[])]
      };
    }
  });

  return Object.values(airportsMap);
};

export const getUniqueFares = (fares: Prisma.FareCreateInput[]): Prisma.FareCreateInput[] => {
  const faresMap: Record<string, Prisma.FareCreateInput> = {};
  fares.forEach((fare) => {
    if (!faresMap[fare.origin + fare.destination + fare.date]) {
      faresMap[fare.origin + fare.destination + fare.date] = fare;
    }
  });

  return Object.values(faresMap);
};
