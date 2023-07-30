import {joinFares} from "@/helpers/joinFares";
import {SortType} from "@/helpers/sort";
import {getAllAirports} from "../../../../common/airports";
import {getDbSession} from "../../../../common/dbSession";
import {FareData, getFares} from "../../../../common/fares";
import {getStatus} from "../../../../common/status";

type GetDataParams = {
  locations: string[][];
  dates: Date[][];
  sortType: SortType;
}

export async function getData({ locations, dates, sortType }: GetDataParams) {
  const session = getDbSession();
  const { airportCount, fareCount } = await getStatus({ session });
  const airports = await getAllAirports({ session });

  const paramGroups = locations.map((location, index) => ({
    origins: location,
    destinations: locations[index + 1] || [],
    dates: dates[index],
  })).filter(({ origins, destinations }) => origins.length && destinations.length);

  let result: FareData[][] = [];
  for (const params of paramGroups) {
    const fares = await getFares({
      session,
      origins: params.origins,
      destinations: params.destinations,
      dates: params.dates,
      sortType,
    });

    result = result.length ? joinFares(result, fares) : fares;
  }

  session.close();

  return {
    airports,
    airportCount,
    fareCount,
    fares: result,
  }
}