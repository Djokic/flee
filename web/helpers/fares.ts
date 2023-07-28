import {getDateQueryConditions} from "@/helpers/prismaQueryHelpers";
import {SortType} from "@/helpers/sort";
import {Fare} from "@prisma/client";
import {differenceInHours} from "date-fns";
import { prisma } from "./prisma";

type GetFaresInput = {
  origins: string[];
  destinations: string[];
  dates: Date[];
  sortBy: SortType;
  minStopoverOffsetInHours?: number;
  maxStopoverOffsetInHours?: number;
  limit?: number;
}
export async function getFares({ origins, destinations, dates, sortBy, minStopoverOffsetInHours = 4, maxStopoverOffsetInHours = 24, limit = 500 }: GetFaresInput): Promise<Fare[] | Fare[][]> {
  if (!origins?.length && !destinations?.length) {
    return [];
  }

  const fetchConditions = {
    orderBy: {
      [sortBy]: 'asc',
    },
    take: 500,
  }

  const datesQueryConditions = getDateQueryConditions(dates);

  const directFares = await prisma.fare.findMany({
    where: {
      ...(origins.length ? {origin: {in: origins}} : {}),
      ...(destinations.length ? {destination: {in: destinations}} : {}),
      ...(datesQueryConditions ? {date: datesQueryConditions} : {}),
    },
    ...fetchConditions,
  });

  if (directFares.length) {
    return directFares
  }

  const faresFromOriginToStop = await prisma.fare.findMany({
    where: {
      ...(origins.length ? { origin: { in: origins } } : {}),
      ...(datesQueryConditions ? { date: datesQueryConditions } : {}),
    },
    ...fetchConditions,
  });

  const possibleStops = faresFromOriginToStop.map(({ destination }) => destination);

  if (!possibleStops.length) {
    return [];
  }

  const adjustedDatesConditions = getDateQueryConditions(dates, minStopoverOffsetInHours);
  const faresFromStopToDestination = await prisma.fare.findMany({
    where: {
      origin: { in: possibleStops },
      ...(destinations.length ? { destination: { in: destinations } } : {}),
      ...(adjustedDatesConditions ? { date: adjustedDatesConditions } : {}),
    },
    ...fetchConditions,
  });

  const connectingFares: Fare[][] = faresFromOriginToStop.map((fareFromOrigin) => {
    return faresFromStopToDestination
      .filter(({ origin, date }) =>{
        const hasSameStop = fareFromOrigin.destination === origin;
        const diffInHours = differenceInHours(date, fareFromOrigin.date);
        return hasSameStop && diffInHours >= minStopoverOffsetInHours && diffInHours <= maxStopoverOffsetInHours;
      })
      .map((fareToDestination) => [fareFromOrigin, fareToDestination])
  }).flat();

  return connectingFares;
}