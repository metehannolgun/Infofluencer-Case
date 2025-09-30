import React, { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { MENU_ITEMS } from '../constants'
import { MenuItem } from '../types'

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState('Dashboard')

  const handleItemClick = (label: string) => {
    setActiveItem(label)
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex flex-col bg-white shadow-lg border-r border-gray-200 h-screen sticky top-16 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-16'
      }`}>
        {/* Sidebar Header */}
        <div className='p-4 border-b border-gray-200 flex items-center justify-between'>
          {isOpen && <h2 className='text-lg font-semibold text-gray-800'>Menu</h2>}
          <button 
            onClick={toggleSidebar}
            className='p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
          >
            <ChevronLeft className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
              !isOpen ? 'rotate-180' : ''
            }`} />
          </button>
        </div>
        
        {/* Navigation Menu */}
        <nav className='flex-1 px-2 py-6'>
          <ul className='space-y-2'>
            {MENU_ITEMS.map((item: MenuItem, index: number) => {
              const IconComponent = item.icon
              const isActive = activeItem === item.label
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={() => handleItemClick(item.label)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-200 group cursor-pointer ${
                      isActive 
                        ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    title={!isOpen ? item.label : ''}
                  >
                    <IconComponent className={`w-5 h-5 flex-shrink-0 ${
                      isActive ? 'text-blue-600' : 'group-hover:text-blue-600'
                    }`} />
                    {isOpen && (
                      <span className={`font-medium ${isActive ? 'text-blue-600' : ''}`}>
                        {item.label}
                      </span>
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        
        {/* Sidebar Footer */}
        {isOpen && (
          <div className='p-4 border-t border-gray-200'>
            <div className='bg-blue-50 rounded-lg p-4'>
              <h3 className='text-sm font-semibold text-blue-800 mb-1'>Need Help?</h3>
              <p className='text-xs text-blue-600'>Contact our support team</p>
            </div>
          </div>
        )}
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className='md:hidden fixed inset-0 z-50' onClick={toggleSidebar}>
          <div 
            className='fixed left-0 top-0 bottom-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out border-r border-gray-200'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header */}
            <div className='p-4 border-b border-gray-200 flex items-center justify-between bg-white'>
              <h2 className='text-lg font-semibold text-gray-800'>Menu</h2>
              <button 
                onClick={toggleSidebar}
                className='p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
              >
                <ChevronLeft className='w-5 h-5 text-gray-600' />
              </button>
            </div>
            
            {/* Mobile Navigation */}
            <nav className='px-4 py-6 bg-white h-full'>
              <ul className='space-y-2'>
                {MENU_ITEMS.map((item: MenuItem, index: number) => {
                  const IconComponent = item.icon
                  const isActive = activeItem === item.label
                  return (
                    <li key={index}>
                      <a
                        href={item.href}
                        onClick={() => {
                          handleItemClick(item.label)
                          toggleSidebar()
                        }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer ${
                          isActive 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                      >
                        <IconComponent className={`w-5 h-5 ${
                          isActive ? 'text-blue-600' : ''
                        }`} />
                        <span className={`font-medium ${isActive ? 'text-blue-600' : ''}`}>
                          {item.label}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
              
              {/* Mobile Footer */}
              <div className='absolute bottom-4 left-4 right-4'>
                <div className='bg-blue-50 rounded-lg p-4'>
                  <h3 className='text-sm font-semibold text-blue-800 mb-1'>Yardım mı lazım?</h3>
                  <p className='text-xs text-blue-600'>Destek ekibimizle iletişime geçin</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar