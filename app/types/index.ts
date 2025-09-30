// Common types for the application

export interface MenuItem {
  icon: React.ComponentType<any>
  label: string
  href: string
}

export interface KpiData {
  title: string
  value: string
  icon: React.ComponentType<any>
  color: string
  bgColor: string
  iconColor: string
  change: string
  changeType: 'positive' | 'negative'
}

export interface ChartData {
  week: string
  followers: number
}

export interface LoginFormData {
  email: string
  password: string
}

export interface User {
  email: string
  password: string
}