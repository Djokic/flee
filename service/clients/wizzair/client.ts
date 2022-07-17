import { getConnectionsForOperator } from 'clients/helpers';
import { formatDate } from 'helpers/date';

import { AirlineClient, AirlineClientParams, Airport, Fare, Operator } from '../types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';

export class WizzAirClient implements AirlineClient {
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
      const connections = getConnectionsForOperator(airport, Operator.WIZZAIR);
      for (const connection of connections) {
        this.fares = await getFares({
          origin: airport.code,
          destination: connection.code,
          startDate: formatDate(new Date()),
          lookupDays: this.params.lookupDays
        });
      }
    }
    return this.fares;
  };
}
