"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DollarSign, Home, Settings, ShoppingBag, ShoppingCart, Mail, Users, Info, Bell } from 'lucide-react'
import { Menu } from 'lucide-react'
const ICONS = { DollarSign, Home, Settings, ShoppingBag, ShoppingCart, Mail, Users, Info, Bell }

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [sidebarItems, setSidebarItems] = useState([])
  const pathname = usePathname()

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => {setSidebarItems(data.sidebarItems || [])})
      .catch((error) => console.error("Error fetching sidebar data:", error))
  }, [])

  return (
    <div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
        <button
          className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={24} />
        </button>
        <nav className="mt-8 flex-grow">
          {sidebarItems?.map((item) => {
            const IconComponent = ICONS[item.icon]
            return (
              <Link key={item.name} href={item.href}>
                <div className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors duration-200 ${pathname === item.href ? 'bg-[#2f2f2f]' : ''}`}>
                  {IconComponent && <IconComponent size={20} style={{ minWidth: '20px' }} />}
                  {isSidebarOpen && <span className="ml-4 whitespace-nowrap">{item.name}</span>}
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
