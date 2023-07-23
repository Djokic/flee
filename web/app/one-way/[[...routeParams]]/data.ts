import {prisma} from "@/helpers/prisma";
import {getDateQueryConditions} from "@/helpers/prismaQueryHelpers";
import {SortType} from "@/helpers/sort";

export async function getData(origins: string[], destinations: string[], departures: Date[], sortBy: SortType) {
  const airports = await prisma.airport.findMany();

  if (!origins.length && !destinations.length) {
    return {
      airports,
      fares: [],
    }
  }

  const departuresConditions = getDateQueryConditions(departures);

  const fares = await prisma.fare.findMany({
    where: {
      ...(origins.length ? { origin: { in: origins } } : {}),
      ...(destinations.length ? { destination: { in: destinations } } : {}),
      ...(departuresConditions ? { date: departuresConditions } : {}),
    },
    orderBy: {
      [sortBy]: 'asc',
    }
  });

  return {
    airports,
    fares,
  }
}