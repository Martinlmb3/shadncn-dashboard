"use client"
import React from 'react'
import StatCard from '@/components/StatCard'
import { motion } from 'framer-motion'
import {DollarSign, ShoppingBag, Users, SquareActivity} from 'lucide-react'
import SalesOverviewChart from '@/components/SalesOverviewChart'
import CategoryDistributionChart from "@/components/CategoryDistributionChart.jsx";
import OrderDistributionChart from '@/components/OrderDistributionChart'
import ProductPerformanceChart from '@/components/ProductPerformanceChart'
import Header from '@/components/Header'
function OverviewPage() {
  return (
    <div ClassName="flex-1 h-screen overflow-y-auto overflow-x-hidden relative z-10 scroll-smooth">
        <main className="max-w-7xl mx-auto py-4 px-4 lg:px-8 min-h-full">
            <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            >
                <StatCard name="Total Sales" icon={DollarSign} value={100} />
                <StatCard name="Total Users" icon={Users} value={200} />
                <StatCard name="Stock" icon={SquareActivity} value={300} />
                <StatCard name="Total Revenue" icon={ShoppingBag} value={400} />
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
              <SalesOverviewChart />
              <CategoryDistributionChart />
              <OrderDistributionChart/>
              <ProductPerformanceChart/>
            </div>
        </main>
    </div>
  )
}

export default OverviewPage;