import { Users, Eye, TrendingUp, Home, Settings } from 'lucide-react'
import { MenuItem, KpiData, ChartData } from '../types'

export const MENU_ITEMS: MenuItem[] = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Users, label: 'Influencerlar', href: '/influencers' },
  { icon: Settings, label: 'Ayarlar', href: '/settings' },
]

export const KPI_DATA: KpiData[] = [
  {
    title: 'Toplam Influencer',
    value: '3',
    icon: Users,
    color: 'blue',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    change: '+1',
    changeType: 'positive'
  },
  {
    title: 'Toplam Takipçi',
    value: '102.400',
    icon: Eye,
    color: 'green',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    change: '+5.2K',
    changeType: 'positive'
  },
  {
    title: 'Ortalama Etkileşim',
    value: '%4.7',
    icon: TrendingUp,
    color: 'purple',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    change: '+0.3%',
    changeType: 'positive'
  }
]

export const CHART_DATA: ChartData[] = [
  { "week": "1. Hafta", "followers": 200 },
  { "week": "2. Hafta", "followers": 450 },
  { "week": "3. Hafta", "followers": 300 },
  { "week": "4. Hafta", "followers": 600 }
]