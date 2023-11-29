const getStaleTime = (period: string) => {
  if (period === "day") return 24 * 60 * 60 * 1000
  else if (period === "hour") return 60 * 60 * 1000
  else return 60 * 1000
}

export { getStaleTime }
