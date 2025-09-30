import React, { useState } from 'react'
import { User, Menu } from 'lucide-react'

interface HeaderProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const Header = ({ isSidebarOpen, toggleSidebar }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
   <header className='bg-white shadow-lg sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center py-4'>
                {/* Mobile menu button and Logo */}
                <div className='flex items-center gap-3'>
                    <button 
                        onClick={toggleSidebar}
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
                    >
                        <Menu className='w-5 h-5 text-gray-600' />
                    </button>
                    <span className='text-2xl font-bold text-blue-600'>Infofluencer</span>
                </div>
                
                {/* Right side icons */}
                <div className='flex items-center space-x-4'>
                    <div className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer transition-colors duration-200'>
                        <User className='w-5 h-5 text-gray-600'/>
                    </div>
                </div>
            </div>
        </div>
   </header>
  )
}

export default Header