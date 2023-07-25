import {getAllAirports} from "@/helpers/airports";
import {getFares} from "@/helpers/fares";
import {SortType} from "@/helpers/sort";
import {Fare} from "@prisma/client";
import {differenceInHours} from "date-fns";

const MIN_DIFF_BETWEEN_INBOUND_AND_OUTBOUND = 1; // in days
const MAX_DIFF_BETWEEN_INBOUND_AND_OUTBOUND = 30; // in days

export async function getData(origins: string[], destinations: string[], departureDates: Date[], returnDates: Date[], sortBy: SortType) {
  const [
    airports,
    outboundFares,
    inboundFares,
  ] = await Promise.all([
    getAllAirports(),
    getFares({
      origins,
      destinations,
      dates: departureDates,
      sortBy,
      limit: 10000
    }),
    getFares({
      origins: destinations,
      destinations: origins,
      dates: returnDates,
      sortBy,
      limit: 10000
    })
  ]);

  const fares: Fare[][] = outboundFares.map((outboundFare) => {
    const lastOutboundFare = Array.isArray(outboundFare) ? outboundFare[outboundFare.length - 1] : outboundFare;

    return inboundFares.map((inboundFare) => {
      const firstInboundFare = Array.isArray(inboundFare) ? inboundFare[0] : inboundFare;
      const isToShortStay = differenceInHours(firstInboundFare.date, lastOutboundFare.date) < MIN_DIFF_BETWEEN_INBOUND_AND_OUTBOUND * 24;
      const isToLongStay = differenceInHours(firstInboundFare.date, lastOutboundFare.date) > MAX_DIFF_BETWEEN_INBOUND_AND_OUTBOUND * 24;
      const notSameTarget = lastOutboundFare.destination !== firstInboundFare.origin;

      if (isToShortStay || isToLongStay || notSameTarget) {
        return [];
      }

      return [outboundFare, inboundFare].flat();
    }).filter(item => item.length);
  }).flat().filter(item => item.length).slice(0, 500);

  return {
    airports,
    fares,
  }
}