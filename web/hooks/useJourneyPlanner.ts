import {SortType} from "@/helpers/sort";
import { createRouteUrl } from "@/helpers/urlHelper";
import useForm from "@/hooks/useForm";
import {useMemo} from "react";
import { Airport } from "../../common/airports";

export type UseJourneyPlannerInput = {
  airports: Airport[];
  initialLocationCodes?: string[][];
  initialDates?: Date[][];
  onlyDirect: boolean;
  sortType: SortType;
  baseUrl: string;
}

export type UseJourneyPlannerOutput = {
  possibleLocations: Airport[][];
  locations: Airport[][];
  dates: Date[][];
  handleChange: (value: Record<string, any>) => void;
  searchUrl: string;
}

function getPossibleDestinationsFromAirports(airports: Airport[], onlyDirect: boolean, prevAirports: Airport[]) {
  if (!onlyDirect) {
    const prevAirportsCodes = prevAirports.map((airport: Airport) => airport.code);
    return airports.filter((airport: Airport) => !prevAirportsCodes.includes(airport.code));
  }

  const connectionsFromPrevAirports = prevAirports
    .map((airport: Airport) =>
      airport.connections
        .map((connection) =>
          connection.split('.')[0]
        )
    ).flat();

  return airports.filter((airport: Airport) => connectionsFromPrevAirports.includes(airport.code));
}

/**
 * This hook is used to manage all the journey planning details
 * It exposes possible locations for each step, selected locations & dates for each step and handlers for change
 * @param airports
 * @param locationCodes
 * @param datesStrings
 * @param onlyDirect
 * @param baseUri
 */
export function useJourneyPlanner({ airports, initialLocationCodes, initialDates, onlyDirect, sortType, baseUrl }: UseJourneyPlannerInput): UseJourneyPlannerOutput {
  // Create a map of airports for faster access later
  const airportsMap = useMemo(() => {
    return airports.reduce((acc: Record<string, Airport>, airport: Airport) => {
      acc[airport.code] = airport;
      return acc;
    }, {});
  }, [airports]);

  // Create a form to manage the locations and dates
  const { values: { locations, dates }, handleChange } = useForm({
    initialValues: {
      locations: initialLocationCodes
        ?.map((codes: string[]) =>
          codes
            .map(code => airportsMap[code])
            .filter(Boolean)
        ) || [[]],
      dates: initialDates || [[]],
    }
  })

  /**
   * Create a list of possible locations for airports select based on the airports selected in previous location step
   * If onlyDirect is true, we filter airports to only those that have a direct connection to the previous location
   * Otherwise, we return all airports
   * @type {Airport[][]}
   */
  const possibleLocations = useMemo(() => {
    let locationsArray = locations.map((_, index) => {
      // If it is first location, return all airports
      if (index === 0) {
        return airports;
      }

      return getPossibleDestinationsFromAirports(airports, onlyDirect, locations[index - 1]);
    });

    if (locationsArray.length > 0) {
      locationsArray.push(getPossibleDestinationsFromAirports(airports, onlyDirect, locations[locationsArray.length - 1]));
    }

    return locationsArray;
  }, [locations, onlyDirect, airports]);

  /**
   * Create a search url based on the locations and dates selected
   * @type {string}
   */
  const searchUrl = useMemo(() => {
    return createRouteUrl({
      baseUrl,
      sortType,
      dates,
      locations: locations.map((group) => group.map((airport) => airport.code))
    });
  }, [locations, dates, baseUrl]);


  return {
    possibleLocations,
    locations,
    dates,
    handleChange,
    searchUrl
  }

}