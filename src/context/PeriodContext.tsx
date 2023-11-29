import { PropsWithChildren, createContext, useContext, useState } from "react"
import { ContextType } from "../types"

export const PeriodContext = createContext<ContextType | undefined>(undefined)

export const PeriodProvider = ({ children }: PropsWithChildren<{}>) => {
  const value = useState("day")

  return (
    <PeriodContext.Provider value={value}>{children}</PeriodContext.Provider>
  )
}

export const usePeriodContext = () => {
  const context = useContext(PeriodContext)

  if (!context) {
    throw new Error("PeriodContext must be used inside the PeriodProvider")
  }

  return context
}
