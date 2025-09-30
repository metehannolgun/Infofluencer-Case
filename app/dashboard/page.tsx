"use client"
import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import KpiCard from '../components/KpiCard'
import Chart from '../components/Chart'

const Dashboardpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='min-h-screen bg-gray-50'>
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className='flex'>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main className={`flex-1 p-6 transition-all duration-300 ease-in-out ${
              isSidebarOpen ? 'md:ml-0' : 'md:ml-0'
            }`}>
                <div className='max-w-7xl mx-auto'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-8'>Dashboard</h1>
                    <div className='space-y-6'>
                        <KpiCard />
                        <Chart />
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Dashboardpage