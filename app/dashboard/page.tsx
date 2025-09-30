"use client"
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import KpiCard from '../components/KpiCard'
import Chart from '../components/Chart'

const Dashboardpage = () => {
  return (
    <div>
        <Header />
        
        <div>
            <Sidebar />
            <main>
                <KpiCard />
                <Chart />
            </main>
        </div>
    </div>
  )
}

export default Dashboardpage