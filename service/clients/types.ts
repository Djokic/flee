export type AirlineClientParams = {
  airportCodes?: string[];
  lookupDays: number
}

export interface AirlineClient {
  airports: Airport[];
  flights: Flight[];
  getData: () => Promise<void>;
}

export enum Operator {
  RYANAIR = 'RYANAIR',
  WIZZAIR = 'WIZZAIR'
}

export type Connection = {
  code: string;
  operator: Operator;
}

export type Airport  = {
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

export type Flight = {
  origin: string;
  destination: string;
  fares: Fare[];
}