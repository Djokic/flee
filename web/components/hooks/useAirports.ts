import {useCollection} from "components/hooks/useCollection";
import {useMemo} from "react";
import {Airport} from "@common/types";

export function useAirports() {
  const { data: airports, loading } = useCollection<Airport>('api/airports');
  const airportsMap = useMemo(() => {
    return airports.reduce((acc, curr) => ({ ...acc, [curr.code]: curr }), {});
  }, [airports]);

  return {
    airports,
    airportsMap,
    loading
  }
}