// Utility functions for the application

export const formatNumber = (num: number): string => {
  return num.toLocaleString()
}

export const calculateGrowth = (data: { followers: number }[]): string => {
  if (data.length < 2) return '0'
  const first = data[0].followers
  const last = data[data.length - 1].followers
  return ((last - first) / first * 100).toFixed(1)
}

export const calculateAverage = (data: { followers: number }[]): number => {
  const sum = data.reduce((acc, item) => acc + item.followers, 0)
  return Math.round(sum / data.length)
}

export const getMaxValue = (data: { followers: number }[]): number => {
  return Math.max(...data.map(item => item.followers))
}

export const getMinValue = (data: { followers: number }[]): number => {
  return Math.min(...data.map(item => item.followers))
}