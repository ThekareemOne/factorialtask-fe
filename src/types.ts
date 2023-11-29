import { WiredInputProps } from "react-wired-elements"

export type Data = object
export type Parameters = object
export type ContentType = string
export type Accept = string

export interface RequestOptions {
  url: string
  data?: Data
  parameters?: Parameters
  method: string
  contentType?: ContentType
  accept?: Accept
}

export interface StyledWiredInputProps extends WiredInputProps {
  elevation?: number
}

export interface Metric {
  name: string
  value: string
  timestamp: Date
}

export interface WithLoadingProps {
  isLoading: boolean
}

export interface ViewMetricsProps {
  metrics: string[]
}

export interface TimelineProps {
  data: Metric[]
}

export type ContextType = [string, (metric: string) => void]
