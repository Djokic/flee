import { Prisma, Operator, Airport } from '@prisma/client';

import { getConnectionsForOperator } from 'helpers/common';
import { formatDate } from 'helpers/date';

import { AirlineClient, AirlineClientParams } from 'clients/types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';
import { WizzAirRequestsManager } from './requestsManager';

export class WizzAirClient implements AirlineClient {
  private static readonly MAX_REQUESTS_PER_SESSION = 5;
  private params: AirlineClientParams;
  private faresCache: Prisma.FareCreateInput[] = [];
  private requestsManager: WizzAirRequestsManager = new WizzAirRequestsManager(WizzAirClient.MAX_REQUESTS_PER_SESSION);

  constructor (params: AirlineClientParams) {
    this.params = params;
  }

  public getAirports = async () => {
    return await getAirportsWithRoutes(this.requestsManager.get);
  };

  public getFaresForAirports = async (airports: Airport[]) => {
    this.faresCache = [];
    const fetchedConnectionsFlags: Record<string, boolean> = {};

    const totalConnections = airports.flatMap((airport) => getConnectionsForOperator(airport, Operator.WIZZAIR)).length;
    let currentConnection = 0;

    for (const airport of airports) {
      const connections = getConnectionsForOperator(airport, Operator.WIZZAIR);

      for (const connection of connections) {
        const notAlreadyFetched =
          !fetchedConnectionsFlags[`${airport.code}-${connection.code}`] ||
          !fetchedConnectionsFlags[`${connection.code}-${airport.code}`];

        if (notAlreadyFetched) {
          currentConnection++;
          console.log(`[WizzAir][${currentConnection}/${totalConnections}] -> ${airport.code} <--> ${connection.code} `);

          let fares: Prisma.FareCreateInput[] = [];

          // try {
          fares = await getFares(this.requestsManager.post, {
            origin: airport.code,
            destination: connection.code,
            startDate: formatDate(new Date()),
            lookupDays: this.params.lookupDays
          });
          fetchedConnectionsFlags[`${airport.code}-${connection.code}`] = true;
          fetchedConnectionsFlags[`${connection.code}-${airport.code}`] = true;
          // } catch (error) {
          //   throw error;
          //   console.log(`[Error!][WizzAir] -> ${airport.code} <--> ${connection.code} -> ${(error as AxiosError).message || error}`);
          // }

          this.faresCache = [...this.faresCache, ...fares];
        }
      }
    }

    return this.faresCache;
  };
}
