import React from 'react'
import { KPI_DATA } from '../constants'
import { KpiData } from '../types'

const KpiCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {KPI_DATA.map((kpi: KpiData, index: number) => {
        const IconComponent = kpi.icon
        return (
          <div 
            key={index}
            className='bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200'
          >
            {/* Icon and Title */}
            <div className='flex items-center justify-between mb-4'>
              <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                <IconComponent className={`w-6 h-6 ${kpi.iconColor}`} />
              </div>
              <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                kpi.changeType === 'positive' 
                  ? 'text-green-700 bg-green-100' 
                  : 'text-red-700 bg-red-100'
              }`}>
                {kpi.change}
              </div>
            </div>

            {/* Value */}
            <div className='mb-2'>
              <h3 className='text-3xl font-bold text-gray-900'>{kpi.value}</h3>
            </div>

            {/* Title */}
            <div>
              <p className='text-sm font-medium text-gray-600'>{kpi.title}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default KpiCard