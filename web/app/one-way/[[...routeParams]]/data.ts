import {SortType} from "@/helpers/sort";
import { getAllAirports} from "../../../../common/airports";
import {getDbSession} from "../../../../common/dbSession";
import { getFares} from "../../../../common/fares";
import {getStatus} from "../../../../common/status";

type GetDataParams = {
  origins: string[];
  destinations?: string[];
  departures?: Date[];
  sortType: SortType;
}

export async function getData({ origins, destinations = [], departures, sortType }: GetDataParams) {
  const session = getDbSession();
  const { airportCount, fareCount } = await getStatus({ session });
  const airports = await getAllAirports({ session });

  const fares = await getFares({
    session,
    origins,
    destinations,
    dates: departures,
    sortType,
  });

  session.close();

  return {
    airportCount,
    fareCount,
    airports,
    fares,
  }
}