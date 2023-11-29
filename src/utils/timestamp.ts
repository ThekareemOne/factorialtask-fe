const formatTimestamp = (timestamp: Date) => {
  const date = new Date(timestamp)
  return date.toISOString().split(".")[0] // Remove milliseconds
}

export { formatTimestamp }
