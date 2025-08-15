"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { CartesianGrid, Tooltip, XAxis, YAxis, Legend, Bar, ResponsiveContainer, BarChart } from 'recharts';

function ProductPerformanceChart() {
    const [productPerformanceData, setProductPerformanceData] = useState([]);
    useEffect(() => {
        fetch("/data/productPerformanceData.json")
            .then((res) => res.json())
            .then((data) => setProductPerformanceData(data || []))
            .catch((error) => console.error("Error fetching data:", error));
    }, [])
  return (
    <motion.div className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0"
                        initial={{opacity: 0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{delay:0.4, duration:0.5}}>
        <h2 className="text-base md:text-xl font-semibold text-gray-100 mb-4 text-center md:text-left">Product Performance</h2>
        <div className="w-full h-64 md:h-72">
            <ResponsiveContainer>
                <BarChart data={productPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis
                        dataKey="product"
                        stroke="#9ca3af"
                        tick={{fontSize: 12}}
                        interval="preserveStartEnd"
                    />
                    <YAxis
                        stroke="#9ca3af"
                        tick={{fontSize: 12}}
                        width={40}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4b5563",
                            fontSize:"12px",
                        }} itemStyle={{color:"#e5e7eb"}}
                    />
                    <Legend wrapperStyle={{fontSize: 12}}/>
                    <Bar dataKey="retention" fill="#ff7043" radius={[4, 4, 0, 0]} barSize={20}/>
                    <Bar dataKey="revenue" fill="#42a5f5" radius={[4, 4, 0, 0]} barSize={20}/>
                    <Bar dataKey="profit" fill="#66bb6a" radius={[4, 4, 0, 0]} barSize={20}/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default ProductPerformanceChart