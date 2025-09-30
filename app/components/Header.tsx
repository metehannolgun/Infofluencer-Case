import React from 'react'
import {  Menu, User  } from 'lucide-react'

const Header = () => {
  return (
   <header className='bg-white shadow-lg sticky top-0 z-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center py-4'>
                {/* Logo or Brand Name */}
                <a href='#' className='flex items-center gap-3'>
                    <span className='text-2xl font-bold text-gray-800'>Infofluencer</span>
                </a>
                
                {/* Right side icons */}
                <div className='flex items-center space-x-4'>
                    <User className='w-6 h-6 text-gray-600 hover:text-purple-600 cursor-pointer transition-colors duration-200'/>
                </div>
            </div>

        </div>

   </header>
  )
}

export default Header