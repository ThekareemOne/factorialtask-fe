import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { TimelineProps } from "../types"
import { formatTimestamp } from "../utils/timestamp"

export default function Timeline({ data }: TimelineProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" tickFormatter={formatTimestamp} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="red" />
      </LineChart>
    </ResponsiveContainer>
  )
}
