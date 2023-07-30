import {SortType} from "@/helpers/sort";
import {format} from 'date-fns';

enum Separator {
  GROUP = '->',
  ITEM = '.',
  RANGE = ':',
}

const DATE_FORMAT = 'yyyy-MM-dd';
const SORT_DELIMITER = 'sort';

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
      .map(group =>
          group
            .split(Separator.ITEM)
            .map(item => item.trim())
            .filter(item => item)
      )
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
  const formattedDates = dates.map((group) => group.map((date) => format(date, DATE_FORMAT)).join(Separator.RANGE)).join(Separator.GROUP);

  return {
    locations: formattedLocations,
    dates: formattedDates,
  }
}

type ParseRouteParamsOutput = ParseLocationsAndDatesOutput & {
  sortType: SortType;
}

export function parseRouteParams(params: string[] = [], defaultSortBy: SortType = SortType.DATE): ParseRouteParamsOutput {
  const sortDelimiterIndex = params.indexOf(SORT_DELIMITER);
  const potentialSortBy = sortDelimiterIndex > -1 ? params[sortDelimiterIndex + 1] : undefined;
  const sortBy = potentialSortBy && [SortType.DATE, SortType.PRICE].includes(potentialSortBy as SortType) ? potentialSortBy as SortType : defaultSortBy;

  const partBeforeSortDelimiter = params.slice(0, sortDelimiterIndex > -1 ? sortDelimiterIndex : params.length);
  const [locations, dates] = partBeforeSortDelimiter;

  return {
    ...parseLocationsAndDates(locations, dates),
    sortType: sortBy,
  }
}

type CreateRouteUrlInput = FormatLocationsAndDatesInput & {
  baseUrl: string;
  sortType: SortType;
}

export function createRouteUrl({ baseUrl, locations, dates, sortType }: CreateRouteUrlInput): string {
  const { locations: formattedLocations, dates: formattedDates } = formatLocationsAndDates({ locations, dates });
  let url = `${baseUrl}/${formattedLocations}`;

  if (formattedDates) {
    url += `/${formattedDates}`;
  }

  if (sortType) {
    url += `/${SORT_DELIMITER}/${sortType}`;
  }
  return url;
}

