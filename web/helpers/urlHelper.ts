import { format } from 'date-fns';

enum Separator {
  GROUP = '->',
  ITEM = '.',
  RANGE = ':',
}

const DATE_FORMAT = 'yyyy-MM-dd';

type ParseLocationsAndDatesOutput = {
  locations: string[][];
  dates: Date[][];
}

export function parseLocationsAndDates(
  locations: string = '',
  dates: string = ''
): ParseLocationsAndDatesOutput {

  const decodedLocations = decodeURIComponent(locations);
  const decodedDates = decodeURIComponent(dates);

  const parsedLocations = decodedLocations
    ? decodedLocations
      .split(Separator.GROUP)
      .filter(group => group)
      .map(group => group.split(Separator.ITEM).map(item => item.trim()))
    : [];

  const parsedDates = decodedDates
    ? decodedDates
      .split(Separator.GROUP)
      .filter(group => group)
      .map(group => group
        .split(Separator.RANGE)
        .filter(item => item)
        .map(item => new Date(item.trim())))
    : [];

  return {
    locations: parsedLocations,
    dates: parsedDates,
  };
}

type FormatLocationsAndDatesInput = {
  locations: string[][];
  dates: Date[][]
}


type FormatLocationsAndDatesOutput = {
  locations: string;
  dates: string;
}

export function formatLocationsAndDates({ locations, dates }: FormatLocationsAndDatesInput): FormatLocationsAndDatesOutput {
  const formattedLocations = locations.map((group) => group.join(Separator.ITEM)).join(Separator.GROUP);
  console.log('DD', dates);
  const formattedDates = dates.map((group) => group.map((date) => format(date, DATE_FORMAT)).join(Separator.RANGE)).join(Separator.GROUP);

  return {
    locations: formattedLocations,
    dates: formattedDates,
  }

}