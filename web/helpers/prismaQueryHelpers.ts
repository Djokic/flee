import {addDays, addHours} from "date-fns";


export function getDateQueryConditions(dates: Date[], hoursOffset = 0) {
  if (!dates) {
    return undefined;
  }

  if (dates.length === 1) {
    const adjustedDate = addHours(dates[0], hoursOffset);
    return {
      gte: adjustedDate,
      lte: addDays(adjustedDate, 1)
    };
  }

  if (dates.length === 2) {
    const [from, to] = dates;
    const adjustedFrom = addHours(from, hoursOffset);
    const adjustedTo = addHours(to, hoursOffset);
    return {
      gte: adjustedFrom,
      lte: addDays(adjustedTo, 1)
    };
  }

  return undefined;
}