import {useCollection} from "components/hooks/useCollection";
import {useEffect, useMemo} from "react";
import {ServiceStatus} from "service/helpers/status";
import { Operator} from "../../service/clients";

export function useStatus() {
  const { data, loading, refetch } = useCollection<ServiceStatus>('api/status');

  useEffect(() => {
    setInterval(refetch, 5_000);
  }, []);

  const status = useMemo(() => {
    const statusMap: Record<string, ServiceStatus[]> = {} as Record<Operator, ServiceStatus[]>;
    data.forEach(status => {
      if (!statusMap[status.operator]) {
        statusMap[status.operator] = [];
      }
      statusMap[status.operator].push(status);
    });
    Object.keys(statusMap).forEach(operator => {
      statusMap[operator] = statusMap[operator]
        .sort((a, b) => b.startAt - a.startAt);
    });
    return statusMap;
  }, [data]);

  return {
    status,
    loading
  }
}