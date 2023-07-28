import { Airport } from '@common/airports';
import { FareData } from '@common/fares';
import { Operator } from '@common/types';

import { getConnectionsForOperator, parseConnection } from 'helpers/common';
import { formatDate } from 'helpers/date';

import { AirlineClient, AirlineClientParams } from 'clients/types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';
import { AxiosError } from 'axios';

export class RyanAirClient implements AirlineClient {
  private params: AirlineClientParams;

  constructor (params: AirlineClientParams) {
    this.params = params;
  }

  public getAirports = async () => {
    return await getAirportsWithRoutes();
  };

  public getFaresForAirport = async (airport: Airport) => {
    let fares: FareData[] = [];

    const connections = getConnectionsForOperator(airport, Operator.RYANAIR);
    for (const connection of connections) {
      let outboundFares: FareData[] = [];

      const [destination] = parseConnection(connection);
      try {
        outboundFares = await getFares({
          origin: airport.code,
          destination,
          startDate: formatDate(new Date()),
          lookupDays: this.params.lookupDays
        });
      } catch (error) {
        console.log(`[Error!][RyanAir] -> ${airport.code} --> ${destination} -> ${(error as AxiosError).message || error}`);
      }

      fares = [...fares, ...outboundFares];
    }

    return fares;
  };
}
