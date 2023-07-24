import { Prisma, Airport } from '@prisma/client';

export interface AirlineClient {
  getAirports: () => Promise<Prisma.AirportCreateInput[]>;
  getFaresForAirport: (airport: Airport) => Promise<Prisma.FareCreateInput[]>;
}

export type AirlineClientParams = {
  lookupDays: number
}
