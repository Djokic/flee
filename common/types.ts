import { Prisma, Airport } from "@prisma/client";


export interface AirlineClient {
  airportsData: Prisma.AirportCreateInput[];
  faresData: Prisma.FareCreateInput[];
  getAirports: () => Promise<Prisma.AirportCreateInput[]>;
  getFares: (airports: Airport[]) => Promise<Prisma.FareCreateInput[]>;
}

export type AirlineClientParams = {
  lookupDays: number
}