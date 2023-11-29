import { useMutation, useQueryClient } from "react-query"
import { toast } from "react-toastify"
import Request from "../api/Request"
import { Metric } from "../types"

export default function useCreateMetric() {
  const queryClient = useQueryClient()

  return useMutation<Metric, unknown, Metric>(
    (newMetric: Metric) => {
      return Request.post("/metrics", newMetric)
    },
    {
      onSuccess: (metric: Metric) => {
        toast.success("Metric created successfully")
        queryClient.invalidateQueries(["metric", metric.name])
        queryClient.invalidateQueries("metrics")
      },
      onError: (error) => {
        toast.error("Something went wrong!")
      },
    },
  )
}
