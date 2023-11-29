import styled from "styled-components"
import Timeline from "./Timeline"
import { ViewMetricsProps, Metric } from "../types"
import { Fragment, useEffect } from "react"
import useFetchMetricsByName from "../hooks/useFetchMetricsByName"
import WithLoading from "./hoc/WithLoading"
import {
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
  Tabs,
  Tab,
} from "@mui/material"
import { periodOptions } from "../contants"
import { useMetricsContext } from "../context/MetricContext"
import { usePeriodContext } from "../context/PeriodContext"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const centerTabsStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

function ViewMetrics({ metrics }: ViewMetricsProps) {
  const [selectedMetric, setSelectedMetric] = useMetricsContext()
  const [period, setPeriod] = usePeriodContext()

  const { data, average, isLoading } = useFetchMetricsByName(
    selectedMetric,
    period,
  )

  const TimelineWithLoading = WithLoading(Timeline)

  const selectPeriod = (event: React.SyntheticEvent, newPeriod: string) => {
    if (!periodOptions.includes(newPeriod)) return

    setPeriod(newPeriod)
  }

  const selectMetric = (e: SelectChangeEvent<string>) => {
    setSelectedMetric(e.target.value)
  }

  useEffect(() => {
    setSelectedMetric(metrics[0])
  }, [])

  return (
    <Fragment>
      <div style={centerTabsStyle}>
        <Tabs
          value={period}
          onChange={selectPeriod}
          centered
          indicatorColor="primary"
          textColor="primary"
        >
          {periodOptions.map((period) => (
            <Tab label={period} key={period} value={period} />
          ))}
        </Tabs>
      </div>
      {
        <p>
          Average per {period}: {average?.toFixed(2)}
        </p>
      }
      <Container>
        <div>
          <label htmlFor="metricsSelect">Metric:</label>
          <FormControl>
            <Select
              id="metricsSelect"
              labelId="metricsSelect"
              value={selectedMetric}
              onChange={selectMetric}
            >
              {metrics.map((item) => (
                <MenuItem key={item} value={item} data-testid="metric">
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <TimelineWithLoading data={data as Metric[]} isLoading={isLoading} />
      </Container>
    </Fragment>
  )
}

export default ViewMetrics
