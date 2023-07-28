import {SortType} from "@/helpers/sort";
import {Airport, getAllAirports} from "../../../../common/airports";
import {getDbSession} from "../../../../common/dbSession";
import {FareData, getFares} from "../../../../common/fares";

type GetDataParams = {
  origins: string[];
  destinations?: string[];
  departures?: Date[];
  sortType: SortType;
}

export async function getData({ origins, destinations = [], departures, sortType }: GetDataParams) {
  const session = getDbSession()
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
    airports,
    fares,
  }
}