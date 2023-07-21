import { useCallback, useMemo, useState } from 'react';

import { useFares } from '../useFares/useFares';
import { Airport, Fare } from '@prisma/client';
import { set } from 'lodash';

type UseOneWayFaresInput = {
  airports: Airport[];
}

type UseOneWayFaresOutput = {
  handleSearch: () => void;
  fares: Fare[];
  loading: boolean;
  error: string;
  origins: Airport[];
  potentialOrigins: Airport[];
  destinations: Airport[];
  potentialDestinations: Airport[];
  departure: Date | undefined;
  handleOriginsChange: (origins: Airport[]) => void;
  handleDestinationsChange: (destinations: Airport[]) => void;
  handleDepartureChange: (departure: Date | undefined) => void;
}

export function useOneWayFares({ airports }: UseOneWayFaresInput): UseOneWayFaresOutput {
  const [origins, setOrigins] = useState<Airport[]>([]);
  const [destinations, setDestinations] = useState<Airport[]>([]);
  const [departure, setDeparture] = useState<Date | undefined>();

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



  return {
    fares,
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
  }
}