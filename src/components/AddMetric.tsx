import { Fragment, useState } from "react"
import { WiredButton } from "react-wired-elements"
import styled from "styled-components"
import { toast } from "react-toastify"
import useCreateMetric from "../hooks/useCreateMetric"
import { TextField } from "@mui/material"

const InputContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`

const MetricInput = styled(TextField)`
  width: 250px;
`

const SubmitButton = styled(WiredButton)`
  background: yellow;
  color: red;
  margin: 8px 0;
`

const AddMetric = () => {
  const [name, setName] = useState("")
  const [value, setValue] = useState("")
  const [timestamp, setTimestamp] = useState(new Date())

  const createMetric = useCreateMetric()

  const validateMetric = () => {
    const errors = []
    if (!name) errors.push("Name is required")
    if (!value) errors.push("Value is required")
    if (isNaN(parseFloat(value))) errors.push("Value must be a number")
    if (!timestamp) errors.push("Timestamp is required")

    if (errors.length === 0) return true
    errors.forEach((error) => toast.error(error))
    return false
  }

  const handleSubmit = () => {
    if (!validateMetric()) return
    createMetric.mutate({ name, value, timestamp })

    setName("")
    setValue("")
  }

  return (
    <Fragment>
      <h1>Add New Metric</h1>
      <InputContainer>
        <MetricInput
          type="text"
          label="Name"
          variant="outlined"
          margin="normal"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <MetricInput
          type="text"
          label="Value"
          variant="outlined"
          margin="normal"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <MetricInput
          type="datetime-local"
          variant="outlined"
          margin="normal"
          onChange={(e) => setTimestamp(new Date(e.target.value))}
          value={timestamp.toISOString().substring(0, 16)}
        />
      </InputContainer>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </Fragment>
  )
}

export default AddMetric
