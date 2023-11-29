import { useState } from "react"
import styled from "styled-components"
import { WiredCard } from "react-wired-elements"
import AddMetric from "../components/AddMetric"
import ViewMetrics from "../components/ViewMetrics"
import useFetchMetrics from "../hooks/useFetchMetrics"
import WithLoading from "../components/hoc/WithLoading"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const FullWidthContainer = styled.div`
  width: 95vw;
  height: 100vh;
  display: flex;

  @media (max-width: 1024px) {
    display: block;
  }
`

const CardContainer = styled(WiredCard)`
  flex: 1;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const ViewMetricsContainer = styled(CardContainer)`
  flex: 2;
`

function Landing() {
  const { metrics, isLoading } = useFetchMetrics()

  const ViewMetricsWithLoading = WithLoading(ViewMetrics)

  return (
    <Wrapper>
      <FullWidthContainer>
        <CardContainer elevation={5}>
          <AddMetric />
        </CardContainer>
        <ViewMetricsContainer elevation={5} fill="#F5F5F5">
          <ViewMetricsWithLoading
            metrics={metrics as string[]}
            isLoading={isLoading}
          />
        </ViewMetricsContainer>
      </FullWidthContainer>
    </Wrapper>
  )
}

export default Landing
