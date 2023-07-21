import useSWR from 'swr';
import { Airport } from '@prisma/client';

type UseAirportsOutput = {
  airports: Airport[];
  loading: boolean;
  error: string;
}


export function useAirports(): UseAirportsOutput {
  const { data = [], error } = useSWR<Airport[]>('/api/airports');

  return {
    airports: data,
    loading: !error && !data,
    error,
  };
}