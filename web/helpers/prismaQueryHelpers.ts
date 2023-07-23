import {addDays} from "date-fns";


export function getDateQueryConditions(dates: Date[]) {
  if (!dates) {
    return undefined;
  }

  if (dates.length === 1) {
    return {
      gte: dates[0],
      lte: addDays(dates[0], 1)
    };
  }

  if (dates.length === 2) {
    const [from, to] = dates;
    return {
      gte: from,
      lte: addDays(to, 1)
    };
  }

  return undefined;
}