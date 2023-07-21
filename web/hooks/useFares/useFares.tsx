import { useCallback, useState } from 'react';
import useSWR from 'swr';
import { Airport, Fare } from '@prisma/client';



type UseFaresInput = {
  origins: Airport[];
  destinations: Airport[];
  dates: Date[];
}

type UseFaresOutput = {
  handleSearch: () => void;
  fares?: Fare[];
  loading: boolean;
  error: string;
}

function getFaresUrl({ origins, destinations, dates }: UseFaresInput) {
  return `/api/fares?origins=${origins.map((a) => a.code).join(',')}&destinations=${destinations.map((a) => a.code).join(',')}&dates=${dates.map((d) => d.toISOString()).join(',')}`;
}

export function useFares({ origins, destinations, dates }: UseFaresInput): UseFaresOutput {
  const [url, setUrl] = useState<string | null>(null);
  const { data, error } = useSWR<Fare[]>(url);

  const handleSearch = useCallback(() => {
    setUrl(getFaresUrl({ origins, destinations, dates }));
  }, [origins, destinations, dates]);

  return {
    handleSearch,
    fares: data,
    loading: !error && !data,
    error,
  };
}

  