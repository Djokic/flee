import {useCallback, useEffect, useState} from "react";

export function useCollection<T>(apiRoute: string) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await fetch(apiRoute);
    const d = await res.json();
    setData(d);
    setLoading(false);
  }, [apiRoute, setData, setLoading])

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    refetch: fetchData
  }
}