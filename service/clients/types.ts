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