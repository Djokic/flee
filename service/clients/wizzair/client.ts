import { Prisma, Operator, Airport } from '@prisma/client';
import { AxiosError } from 'axios';

import { getConnectionsForOperator } from 'helpers/common';
import { formatDate } from 'helpers/date';

import { AirlineClient, AirlineClientParams } from 'clients/types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';
import { WizzAirRequestsManager } from './requestsManager';

export class WizzAirClient implements AirlineClient {
  private static readonly MAX_REQUESTS_PER_SESSION = 5;
  private params: AirlineClientParams;
  private requestsManager: WizzAirRequestsManager = new WizzAirRequestsManager(WizzAirClient.MAX_REQUESTS_PER_SESSION);

  constructor (params: AirlineClientParams) {
    this.params = params;
  }

  public getAirports = async () => {
    return await getAirportsWithRoutes(this.requestsManager.get);
  };

  public getFaresForAirport = async (airport: Airport) => {
    let fares: Prisma.FareCreateInput[] = [];

    const connections = getConnectionsForOperator(airport, Operator.WIZZAIR);
    for (const connection of connections) {
      let connectionFares: Prisma.FareCreateInput[] = [];

      try {
        connectionFares = await getFares(this.requestsManager.post, {
          origin: airport.code,
          destination: connection.code,
          startDate: formatDate(new Date()),
          lookupDays: this.params.lookupDays
        });
      } catch (error) {
        console.log(`[Error!][WizzAir] -> ${airport.code} <--> ${connection.code} -> ${(error as AxiosError).message || error}`);
      }

      fares = [...fares, ...connectionFares];
    }

    return fares;
  };
}
