import {prisma} from "@/helpers/prisma";
import {getDateQueryConditions} from "@/helpers/prismaQueryHelpers";

export async function getData(origins: string[], destinations: string[], departures: Date[]) {
  const airports = await prisma.airport.findMany();

  if (!origins.length) {
    return {
      airports,
      fares: [],
    }
  }

  const departuresConditions = getDateQueryConditions(departures);


  const fares = await prisma.fare.findMany({
    where: {
      origin: {
        in: origins
      },
      ...(destinations.length ? { destination: { in: destinations } } : {}),
      ...(departuresConditions ? { date: departuresConditions } : {}),
    },
    orderBy: {
      date: 'asc',
    }
  });

  return {
    airports,
    fares,
  }
}