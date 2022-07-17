import { getConnectionsForOperator } from 'clients/helpers';
import { formatDate } from 'helpers/date';

import { AirlineClient, AirlineClientParams, Airport, Fare, Operator } from '../types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';

export class RyanAirClient implements AirlineClient {
  private params: AirlineClientParams;
  public airports: Airport[] = [];
  public fares: Fare[] = [];

  constructor (params: AirlineClientParams) {
    this.params = params;
  }

  public getAirports = async () => {
    this.airports = await getAirportsWithRoutes();
    return this.airports;
  };

  public getFares = async (airports: Airport[]) => {
    for (const airport of airports) {
      const connections = getConnectionsForOperator(airport, Operator.RYANAIR);
      for (const connection of connections) {
        const outboundFares = await getFares({
          origin: airport.code,
          destination: connection.code,
          startDate: formatDate(new Date()),
          lookupDays: this.params.lookupDays
        });

        const returnFares = await getFares({
          origin: connection.code,
          destination: airport.code,
          startDate: formatDate(new Date()),
          lookupDays: this.params.lookupDays
        });

        this.fares = [...outboundFares, ...returnFares];
      }
    }
    return this.fares;
  };
}
