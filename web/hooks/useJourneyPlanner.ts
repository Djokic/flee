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
  passengersCount: number;
  baseUrl: string;
}

export type UseJourneyPlannerOutput = {
  possibleLocations: Airport[][];
  locations: Airport[][];
  dates: Date[][];
  passengersCount: number;
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
 * @param onlyDirect
 * @param sortType
 * @param baseUrl
 */
export function useJourneyPlanner({ airports, initialLocationCodes, initialDates, onlyDirect, sortType, passengersCount: count, baseUrl }: UseJourneyPlannerInput): UseJourneyPlannerOutput {
  // Create a map of airports for faster access later
  const airportsMap = useMemo(() => {
    return airports.reduce((acc: Record<string, Airport>, airport: Airport) => {
      acc[airport.code] = airport;
      return acc;
    }, {});
  }, [airports]);

  // Create a form to manage the locations and dates
  const { values: { locations, dates, passengersCount }, handleChange } = useForm({
    initialValues: {
      locations: initialLocationCodes
        ?.map((codes: string[]) =>
          codes
            .map(code => airportsMap[code])
            .filter(Boolean)
        ) || [[]],
      dates: initialDates || [[]],
      passengersCount: count,
    }
  })

  /**
   * Create a list of possible locations for airports select based on the airports selected in previous location step
   * If onlyDirect is true, we filter airports to only those that have a direct connection to the previous location
   * Otherwise, we return all airports
   * @type {Airport[][]}
   */
  const possibleLocations = useMemo(() => {
    if (!locations.length) {
      return [airports, airports];
    }

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
      locations: locations.map((group) => group.map((airport) => airport.code)),
      count: passengersCount
    });
  }, [baseUrl, sortType, dates, locations, passengersCount]);


  return {
    possibleLocations,
    locations,
    dates,
    passengersCount,
    handleChange,
    searchUrl
  }

}