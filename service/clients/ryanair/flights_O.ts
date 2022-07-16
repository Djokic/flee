import {formatQueryParams} from "service/helpers/query";

export enum FlightFareType  {
  ADT = 'ADT',
  TEEN = 'TEEN',
  CHD = 'CHD',
  INF = 'INF'
}

export type FlightFare = {
  type: FlightFareType,
  amount: number,
  count: number,
  publishedFare: number,
  hasDiscount: boolean,
  discountInPercent: number,
  hasPromoDiscount: number,
  discountAmount: number,
  hasBogoF: boolean
}

export type FlightSegment = {
  segmentNr: number,
  origin: string,
  destination: string,
  flightNumber: string,
  time: [string, string],
  timeUTC: [string, string],
  duration: string,
}

export type Flight = {
  faresLeft: number,
  flightKey: string,
  infantsLeft: number;
  operatedBy: string,
  flightNumber: string,
  time: [string, string],
  timeUTC: [string, string],
  duration: string,
  regularFare: {
    fareKey: string,
    fareClass: string,
    fares: FlightFare[]
  }
  segments: FlightSegment[]
}

export enum TripType {
  OTHER = 'OTHER'
}

export enum UpgradeType {
  PLUS = 'PLUS'
}

export type Trip = {
  origin: string,
  originName: string,
  destination: string,
  destinationName: string,
  routeGroup: string,
  tripType: TripType,
  upgradeType: UpgradeType,
  dates: {
    dateOut: string,
    flights: Flight[]
  }[]
}

export type GetFlightsResponse = {
  termsOfUse: string,
  currency: string,
  currPrecision: number,
  routeGroup: string,
  tripType: TripType,
  upgradeType: UpgradeType,
  serverTimeUTC: string,
  trips: Trip[]
}

type GetFlightParams = {
  // number of adult passengers
  ADT?: number,
  // number of teen passengers
  TEEN?: number,
  // number of children
  CHD?: number,
  // number of infants
  INF?: number
  Origin: string,
  Destination: string,
  promoCode?: string,
  DateOut: string,

  // max num is 6, after which API returns error or empty response
  FlexDaysOut?: number,
}

const DefaultParams = {
  ADT: 0,
  TEEN: 0,
  CHD: 0,
  INF: 0,
  FlexDaysOut: 6,
  IncludeConnectingFlights: false,
  RoundTrip: false,
  ToUs: 'AGREED',
}

export async function getFlightsData(params: GetFlightParams): Promise<GetFlightsResponse> {
  const combinedParams = { ...DefaultParams, ...params };
  const res = await fetch(`https://www.ryanair.com/api/booking/v4/en-ie/availability?${formatQueryParams(combinedParams)}`);
  return await res.json();
}