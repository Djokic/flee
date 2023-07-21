import { Prisma, Airport } from "@prisma/client";


export interface AirlineClient {
  getAirports: () => Promise<Prisma.AirportCreateInput[]>;
  getFaresForAirports: (airports: Airport[]) => Promise<Prisma.FareCreateInput[]>;
}

export type AirlineClientParams = {
  lookupDays: number
}