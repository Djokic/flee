import {getAllAirports} from "@/helpers/airports";
import {getFares} from "@/helpers/fares";
import {SortType} from "@/helpers/sort";

export async function getData(origins: string[], destinations: string[], departures: Date[], sortBy: SortType) {
  const [
    airports,
    fares,
  ] = await Promise.all([
    getAllAirports(),
    getFares({
      origins,
      destinations,
      dates: departures,
      sortBy,
    })
  ]);

  return {
    airports,
    fares,
  }
}