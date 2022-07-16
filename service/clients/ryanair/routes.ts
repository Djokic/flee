import {transformQueryToQueryString} from "service/clients/ryanair/helpers";
import {AirportResponse} from "service/clients/ryanair/airports";

export type Route = {
  arrivalAirport: AirportResponse;
  operator: string;
}

const RouteQuery = `
  fields {
    operator
    arrivalAirport {
      code
    }
  }
`

export async function getRoutesForAirport(departureAirportCode: string): Promise<Route[]> {
  const res = await fetch(`https://www.ryanair.com/api/locate/v5/routes?departureAirportCode=${departureAirportCode}&${transformQueryToQueryString(RouteQuery)}`);
  return await res.json();
}