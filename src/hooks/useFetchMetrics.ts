import { useQuery } from "react-query"
import Request from "../api/Request"

export default function useFetchMetrics() {
  const { data, isLoading } = useQuery("metrics", () => {
    return Request.get<{ data: string[] }>(`/metrics-values`)
  })
  return { metrics: data?.data || data, isLoading }
}
