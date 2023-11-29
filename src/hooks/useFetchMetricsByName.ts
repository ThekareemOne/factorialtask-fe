import { useQuery, useQueryClient } from "react-query"
import Request from "../api/Request"
import { Metric } from "../types"
import { useEffect } from "react"
import { periodOptions } from "../contants"
import { getStaleTime } from "../utils/period"

export default function useFetchMetricsByName(name: string, period: string) {
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery(
    ["metric", name, period],
    () => {
      return Request.get<{ data: Metric[]; average: number }>(
        `/metrics?name=${name}&period=${period}`,
      )
    },
    { staleTime: getStaleTime(period) },
  )

  useEffect(() => {
    const remainingPeriodOptions = periodOptions.filter((p) => p !== period)
    const prefetchQueries = [
      ["metric", name, remainingPeriodOptions[0]],
      ["metric", name, remainingPeriodOptions[1]],
    ]

    prefetchQueries.forEach((queryKey) => {
      queryClient.prefetchQuery(
        queryKey,
        () =>
          Request.get<{ data: Metric[]; average: number }>(
            `/metrics?name=${name}&period=${queryKey[2]}`,
          ),
        {
          staleTime: getStaleTime(queryKey[2]),
        },
      )
    })
  }, [queryClient, name, period])

  return { data: data?.data, average: data?.average, isLoading }
}
