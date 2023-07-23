import{ Prisma, Operator, Airport } from '@prisma/client';

import { getConnectionsForOperator } from 'helpers/common';
import { formatDate } from '@common/date';

import { AirlineClient, AirlineClientParams} from 'clients/types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';
import { AxiosError } from 'axios';

export class RyanAirClient implements AirlineClient {
  private faresCache: Prisma.FareCreateInput[] = [];

  constructor (private params: AirlineClientParams) {
  }

  public getAirports = async () => {
    return await getAirportsWithRoutes();
  };

  public getFaresForAirports = async (airports: Airport[]) => {
    this.faresCache = [];
    const totalConnections = airports.flatMap((airport) => getConnectionsForOperator(airport, Operator.RYANAIR)).length;
    let currentConnection = 0;

    for (const airport of airports) {
      const connections = getConnectionsForOperator(airport, Operator.RYANAIR);
      for (const connection of connections) {
        currentConnection++;
        console.log(`[RyanAir][${currentConnection}/${totalConnections}] -> ${airport.code} <--> ${connection.code} `);

        let outboundFares: Prisma.FareCreateInput[] = [];
        let returnFares: Prisma.FareCreateInput[] = [];

        try {
          outboundFares = await getFares({
            origin: airport.code,
            destination: connection.code,
            startDate: formatDate(new Date()),
            lookupDays: this.params.lookupDays
          });

          returnFares = await getFares({
            origin: connection.code,
            destination: airport.code,
            startDate: formatDate(new Date()),
            lookupDays: this.params.lookupDays
          });
        } catch (error) {
          console.log(`[Error!][RyanAir] -> ${airport.code} <--> ${connection.code} -> ${(error as AxiosError).message || error}`);
        }

        this.faresCache = [...this.faresCache, ...outboundFares, ...returnFares];
      }
    }

    return this.faresCache;
  };
}
