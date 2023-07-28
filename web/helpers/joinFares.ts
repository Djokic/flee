import {differenceInHours} from "date-fns";
import {FareData} from "../../common/fares";

const MIN_DIFF_BETWEEN_INBOUND_AND_OUTBOUND = 1; // in days
const MAX_DIFF_BETWEEN_INBOUND_AND_OUTBOUND = 30; // in days

export function joinFares(faresGroup1: FareData[][], faresGroup2: FareData[][], limit:number = 1000): FareData[][] {
  const result: FareData[][] = [];

  faresGroup1.forEach((fares1) => {
    const lastOutboundFare = fares1[fares1.length - 1];

    faresGroup2.forEach((fares2) => {
      if (result.length >= limit) {
        return;
      }

      const firstInboundFare = fares2[0];
      const outboundDate = new Date(lastOutboundFare.date);
      const inboundDate = new Date(firstInboundFare.date);
      const isToShortStay = differenceInHours(inboundDate, outboundDate) < MIN_DIFF_BETWEEN_INBOUND_AND_OUTBOUND * 24;
      const isToLongStay = differenceInHours(inboundDate, outboundDate) > MAX_DIFF_BETWEEN_INBOUND_AND_OUTBOUND * 24;
      const notSameTarget = lastOutboundFare.destination !== firstInboundFare.origin;

      if (isToShortStay || isToLongStay || notSameTarget) {
        return;
      }

      result.push([...fares1, ...fares2]);
    });
  });

  return result;
}