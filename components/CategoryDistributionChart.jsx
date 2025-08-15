"use client";
import { use, useEffect, useState } from 'react'
import { Cell, ResponsiveContainer, Tooltip, Legend, Pie, PieChart } from 'recharts';
import { motion } from 'framer-motion';
const CategoryDistributionChart= () => {
    const [categoryData, setCategoryData] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        fetch("/data/categoryData.json")
            .then((response) => response.json())
            .then((data) => setCategoryData(data || []))
            .catch((error) => console.error("Error fetching category data:", error));
    }, []);
    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };
        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, []);
    const outerRadius = isSmallScreen ? 60 : 80;
    const COLORS = ['#A29BFE', '#06D6A0',  '#FFD166', '#FD96FF', '#ff6b6b'];
    return (
        <motion.div className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0" 
                    initial={{opacity: 0, y:20}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.3, duration:0.5}}>
            <h2 className="text-base md:text-lg font-medium mb-4 text-gray-100 text-center md:text-left">Category Distribution</h2>
            <div className="h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie 
                            data={categoryData} 
                            dataKey="value" 
                            cx="50%" 
                            cy="50%" 
                            labelLine={false} 
                            outerRadius={outerRadius}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                            {categoryData?.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: "rgba(31, 41, 55, 0.8)", borderColor:"#4b5563", fontSize: "12px", borderBlock:"#4b5563", borderRadius:  "8px" }}
                        itemStyle={{ color: "#e5e7eb" }} />
                        <Legend iconType="circle" 
                                layout="horizontal" 
                                wrapperStyle={{ fontSize: "12px" }} 
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </motion.div>

    )
}

export default CategoryDistributionChart;
