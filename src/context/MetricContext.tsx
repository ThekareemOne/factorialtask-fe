import { PropsWithChildren, createContext, useContext, useState } from "react"
import { ContextType } from "../types"

export const MetricsContext = createContext<ContextType | undefined>(undefined)

export const MetricsProvider = ({ children }: PropsWithChildren<{}>) => {
  const value = useState("metrics_2")

  return (
    <MetricsContext.Provider value={value}>{children}</MetricsContext.Provider>
  )
}

export const useMetricsContext = () => {
  const context = useContext(MetricsContext)

  if (!context) {
    throw new Error("useMetricsContext must be used inside the MetricsProvider")
  }

  return context
}
