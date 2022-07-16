import {formatDate} from "../../helpers/date";

import {AirlineClient, AirlineClientParams, Airport, Flight} from "../types";
import { getAirportsWithRoutes } from "./airports";
import { getFlights } from "./flights";

export class RyanAirClient implements AirlineClient {
  public airports: Airport[] = [];
  public flights: Flight[] = [];

  constructor(private params: AirlineClientParams) {}

  public getData = async () => {
    const { airportCodes, lookupDays } = this.params;
    this.airports = await getAirportsWithRoutes();
    const filteredAirports = this.airports.filter(({ code }) => airportCodes?.includes(code));

    for (const airport of filteredAirports) {
      for (const connection of airport.connections) {
        const dataOut = await getFlights({
          origin: airport.code,
          destination: connection.code,
          startDate: formatDate(new Date()),
          lookupDays
        });

        const dataIn = await getFlights({
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