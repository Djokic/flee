import{ Prisma, Operator, Airport } from '@prisma/client';

import { getConnectionsForOperator } from 'helpers/common';
import { formatDate } from '@common/date';

import { AirlineClient, AirlineClientParams} from '@common/types';
import { getAirportsWithRoutes } from './airports';
import { getFares } from './fares';

export class RyanAirClient implements AirlineClient {
  private params: AirlineClientParams;
  public airportsData: Prisma.AirportCreateInput[] = [];
  public faresData: Prisma.FareCreateInput[] = [];

  constructor (params: AirlineClientParams) {
    this.params = params;
  }

  public getAirports = async () => {
    this.airportsData = await getAirportsWithRoutes();
    return this.airportsData;
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

        this.faresData = [...this.faresData, ...outboundFares, ...returnFares];
      }
    }
    return this.faresData;
  };
}
