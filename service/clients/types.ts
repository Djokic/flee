import { Airport } from '@common/airports';
import { FareData } from '@common/fares';

export interface AirlineClient {
  getAirports: () => Promise<Airport[]>;
  getFaresForAirport: (airport: Airport) => Promise<FareData[]>;
}

export type AirlineClientParams = {
  lookupDays: number
}
