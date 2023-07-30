import {joinFares} from "@/helpers/joinFares";
import {SortType} from "@/helpers/sort";
import { getAllAirports} from "../../../../common/airports";
import {getDbSession} from "../../../../common/dbSession";
import { getFares} from "../../../../common/fares";
import {getStatus} from "../../../../common/status";

type GetDataParams = {
  origins: string[];
  destinations?: string[];
  departures?: Date[];
  arrivals?: Date[];
  sortType: SortType;
}

export async function getData({ origins, destinations = [], departures, arrivals, sortType }: GetDataParams) {
  const session = getDbSession();
  const { airportCount, fareCount } = await getStatus({ session });
  const airports = await getAllAirports({ session });

  const departureFares = await getFares({
    session,
    origins,
    destinations,
    dates: departures,
    sortType,
    limit: 100
  });

  const arrivalFares = await getFares({
    session,
    origins: destinations,
    destinations: origins,
    dates: arrivals,
    sortType,
    limit: 100
  });

  session.close();

  const fares = joinFares(departureFares, arrivalFares);

  return {
    airportCount,
    fareCount,
    airports,
    fares,
  }
}