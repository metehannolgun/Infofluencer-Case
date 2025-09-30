"use client"
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp } from 'lucide-react'
import { CHART_DATA } from '../constants'
import { formatNumber, calculateGrowth, calculateAverage, getMaxValue, getMinValue } from '../utils'

const Chart = () => {
  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900">{label}</p>
          <p className="text-sm text-blue-600">
            Takipçi: <span className="font-semibold">{formatNumber(payload[0].value)}</span>
          </p>
        </div>
      )
    }
    return null
  }

  const maxValue = getMaxValue(CHART_DATA)
  const minValue = getMinValue(CHART_DATA)
  const avgValue = calculateAverage(CHART_DATA)
  const totalGrowth = calculateGrowth(CHART_DATA)

  return (
    <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
      {/* Chart Header */}
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900 mb-1'>Haftalık Takipçi Artışı</h3>
          <p className='text-sm text-gray-600'>Son 4 haftalık takipçi değişimi</p>
        </div>
        <div className='flex items-center gap-2 text-green-600'>
          <TrendingUp className='w-5 h-5' />
          <span className='text-sm font-medium'>+{totalGrowth}% artış</span>
        </div>
      </div>

      {/* Chart Container */}
      <div className='h-80 mb-6'>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={CHART_DATA}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis 
              dataKey="week" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => value.toLocaleString()}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey="followers" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7, stroke: '#3b82f6', strokeWidth: 2, fill: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Chart Stats */}
      <div className='grid grid-cols-3 gap-4 pt-6 border-t border-gray-200'>
        <div className='text-center'>
          <p className='text-2xl font-bold text-gray-900'>{formatNumber(maxValue)}</p>
          <p className='text-xs text-gray-600'>En yüksek</p>
        </div>
        <div className='text-center'>
          <p className='text-2xl font-bold text-gray-900'>{formatNumber(minValue)}</p>
          <p className='text-xs text-gray-600'>En düşük</p>
        </div>
        <div className='text-center'>
          <p className='text-2xl font-bold text-gray-900'>{formatNumber(avgValue)}</p>
          <p className='text-xs text-gray-600'>Ortalama</p>
        </div>
      </div>
    </div>
  )
}

export default Chart