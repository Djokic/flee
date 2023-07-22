import { useCallback, useMemo, useState } from 'react';

import { useFares } from '../useFares/useFares';
import { Airport, Fare } from '@prisma/client';

export enum FaresSortBy {
  PRICE = 'Price',
  DATE = 'Date'
}

type UseOneWayFaresInput = {
  airports: Airport[];
}

type UseOneWayFaresOutput = {
  fares: Fare[];
  airportsMap: Record<string, Airport>;
  loading: boolean;
  error: string;
  origins: Airport[];
  potentialOrigins: Airport[];
  destinations: Airport[];
  potentialDestinations: Airport[];
  departure: Date | undefined;
  sortBy: FaresSortBy;
  handleOriginsChange: (origins: Airport[]) => void;
  handleDestinationsChange: (destinations: Airport[]) => void;
  handleDepartureChange: (departure: Date | undefined) => void;
  handleSearch: () => void;
  handleSort: (sortBy: FaresSortBy) => void;
}

export function useOneWayFares({ airports }: UseOneWayFaresInput): UseOneWayFaresOutput {
  const [origins, setOrigins] = useState<Airport[]>([]);
  const [destinations, setDestinations] = useState<Airport[]>([]);
  const [departure, setDeparture] = useState<Date | undefined>();
  const [sortBy, setSortBy] = useState<FaresSortBy | string>(FaresSortBy.DATE);

  const { fares = [], loading, error, handleSearch } = useFares({
    origins,
    destinations,
    dates: departure ? [departure] : [],
  });

  const potentialDestinations = useMemo(() => {
    const connectionCodes = origins
      .map(({ connections }) =>
        connections.map(({ code }) => code)
      ).flat();

    return airports.filter(({ code }) => connectionCodes.includes(code));
  }, [origins, airports]);

  const handleOriginsChange = useCallback((origins: Airport[]) => {
    setOrigins(origins);
    setDestinations([]);
  }, [setOrigins, setDestinations]);

  const airportsMap: Record<string, Airport> = useMemo(() => {
    const airportsMap: Record<string, Airport> = {};
    airports.forEach((airport) => {
      airportsMap[airport.code] = airport;
    });
    return airportsMap;
  }, [airports]);

  const sortedFares = useMemo(() => {
    if (sortBy === FaresSortBy.DATE) {
      return fares.sort((a, b) => a.date > b.date ? 1 : -1);
    }
    
    return fares.sort((a, b) => a.price > b.price ? 1 : -1);
  }, [fares, sortBy]);

  return {
    fares: sortedFares,
    airportsMap,
    loading,
    error,
    origins,
    potentialOrigins: airports,
    destinations,
    potentialDestinations,
    departure,
    handleOriginsChange,
    handleDestinationsChange: setDestinations,
    handleDepartureChange: setDeparture,
    handleSearch,
    handleSort: setSortBy
  }
}