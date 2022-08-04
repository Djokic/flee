export enum Operator {
  RYANAIR = 'RYANAIR',
  WIZZAIR = 'WIZZAIR',
  TRANSAVIA = 'TRANSAVIA'
}

export type Connection = {
  code: string;
  operator: Operator;
}

export type Airport = {
  code: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  connections: Connection[];
}

export type Fare = {
  origin: string;
  destination: string;
  date: string;
  price: number;
  currency: string;
  operator: Operator;
}

export interface AirlineClient {
  airports: Airport[];
  fares: Fare[];
  getAirports: () => Promise<Airport[]>;
  getFares: (airports: Airport[]) => Promise<Fare[]>;
}

export type AirlineClientParams = {
  lookupDays: number
}
