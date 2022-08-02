import { getConnectionsForOperator, wait } from 'clients/helpers';
import { getApiUrl } from 'clients/wizzair/auth';
import { formatDate } from 'helpers/date';

import { AirlineClient, AirlineClientParams, Airport, Fare, Operator } from '../types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';

export class WizzAirClient implements AirlineClient {
  private params: AirlineClientParams;
  private apiUrl: string = '';
  public airports: Airport[] = [];
  public fares: Fare[] = [];

  constructor (params: AirlineClientParams) {
    this.params = params;
    getApiUrl().then(url => { this.apiUrl = url; });
  }

  public getAirports = async () => {
    const apiUrl = this.apiUrl || await getApiUrl();
    this.airports = await getAirportsWithRoutes(apiUrl);
    return this.airports;
  };

  public getFares = async (airports: Airport[]) => {
    const apiUrl = this.apiUrl || await getApiUrl();
    for (const airport of airports) {
      const connections = getConnectionsForOperator(airport, Operator.WIZZAIR);
      for (const connection of connections) {
        const fares = await getFares(apiUrl, {
          origin: airport.code,
          destination: connection.code,
          startDate: formatDate(new Date()),
          lookupDays: this.params.lookupDays
        });
        this.fares = [...this.fares, ...fares];
      }
    }
    return this.fares;
  };
}
