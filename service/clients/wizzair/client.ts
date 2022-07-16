import {formatDate} from "../../helpers/date";

import {getApiUrl} from "./auth";

import {AirlineClient, AirlineClientParams, Airport, Flight} from "../types";
import { getAirportsWithRoutes } from "./airports";
import { getFlights } from "./flights";

export class WizzAirClient implements AirlineClient {
  public airports: Airport[] = [];
  public flights: Flight[] = [];

  constructor(private params: AirlineClientParams) {}

  public getData = async () => {
    const apiUrl = await getApiUrl();
    const { airportCodes, lookupDays } = this.params;
    this.airports = await getAirportsWithRoutes(apiUrl);
    const filteredAirports = this.airports.filter(({ code }) => airportCodes?.includes(code));

    for (const airport of filteredAirports) {
      for (const connection of airport.connections) {
        const dataOut = await getFlights(apiUrl, {
          origin: airport.code,
          destination: connection.code,
          startDate: formatDate(new Date()),
          lookupDays
        });

        const dataIn = await getFlights(apiUrl, {
          origin: connection.code,
          destination: airport.code,
          startDate: formatDate(new Date()),
          lookupDays
        });

        this.flights.push(dataOut);
        this.flights.push(dataIn);
      }
    }
  }
}