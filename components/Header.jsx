import React from 'react'
import ReactCountryFlag from "react-country-flag"
import { Bell, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#1e1e1e] shadow-lg border-b border-[#1f1f1f] mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
        <div className='max-w-7xl mx-auto w-full py-4 px-4 sm:px-6 flex items-center justify-between'>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-100">Dashboard</h1>
            <div className='flex items-center space-x-3 sm:space-x-6'>
                <ReactCountryFlag 
                    countryCode="BE" 
                    svg 
                    style={{
                        width: '25px',
                        height: '18px',
                        borderRadius: '4px'
                    }}
                    title="Belgium"
                    className="shadow-md cursor-pointer"
                />
                <div className="relative">
                    <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 cursor-pointer hover:text-white transition-colors" />
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                    <User className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white transition-colors" />
                </div>
                <span className="hidden sm:block text-gray-100 font-medium">Martin Lumumba</span>
            </div>
        </div>
    </header>
  )
}

export default Header