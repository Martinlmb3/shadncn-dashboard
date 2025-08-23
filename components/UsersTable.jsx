"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import Image from "next/image"; // Ajout de l'import manquant

const UsersTable = () => {
    const [clients, setClients] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // Corrigé la faute de frappe

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await fetch("/data/dataClients.json");
                const data = await res.json();
                setClients(data.clients);
            } catch (error) {
                console.error("Error Fetching Clients", error);
            }
        };

        fetchClients();
    }, []);

    const filteredClients = clients.filter((client) => 
        client.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
        client.email?.toLowerCase().includes(searchTerm.toLowerCase())
    ); // Corrigé la faute de frappe et ajouté des vérifications nulles

    return (
        <motion.div
            className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[#1f1f1f] mx-2 md:mx-0 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-100 text-center sm:text-left">Clients</h2>
                <div className="relative w-full sm:w-auto">
                    <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Corrigé: retiré les parenthèses
                        placeholder="Search Clients" 
                        className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-gray-500 duration-200 text-sm"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18}/>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700"> {/* Ajouté divide-y */}
                    <thead>
                        <tr>
                            {["Name", "Email", "Phone Numbers", "Country", "Actions"].map((header) =>(
                                <th key={header} className="px-3 sm:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden sm:table-cell">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700"> {/* Corrigé: ajouté -y */}
                        {filteredClients.map((client, index) => ( // Corrigé la faute de frappe
                            <motion.tr
                                key={client.name || index} // Corrigé: utilisé client.name comme clé unique
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                className="flex flex-col sm:table-row mb-4 sm:mb-0 border-b sm:border-b-0 border-gray-700 sm:border-none p-2 sm:p-0"
                            >
                                {/* Mobile View */}
                                <td className="sm:hidden px-3 py-2">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-9 h-9 rounded-full bg-gray-600 flex items-center justify-center">
                                                {client.name?.[0] || "?"} {/* Placeholder pour l'image */}
                                            </div>
                                            <div className="ml-3">
                                                <div className="text-sm font-medium text-gray-100">
                                                    {client.name}
                                                </div>
                                                <div className="text-xs text-gray-400">
                                                    {client.email}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-1 -mt-5 -mr-4">
                                            <button className="text-indigo-500 hover:text-indigo-300">
                                                <Edit size={16} />
                                            </button>
                                            <button className="text-red-500 hover:text-red-300">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-2 text-xs text-gray-300">
                                        <div>Phone: {client.phoneNumber}</div>
                                        <div>Country: {client.country}</div>
                                    </div>
                                </td>

                                {/* Desktop View */}
                                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                                            {client.name?.[0] || "?"} {/* Placeholder pour l'image */}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-100">
                                                {client.name}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    {client.email}
                                </td>
                                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    {client.phoneNumber}
                                </td>
                                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    {client.country}
                                </td>
                                <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                    <div className="flex space-x-1 -ml-2">
                                        <button className="text-indigo-500 hover:text-indigo-300">
                                            <Edit size={18}/>
                                        </button>
                                        <button className="text-red-500 hover:text-red-300"> {/* Corrigé la couleur */}
                                            <Trash2 size={18}/>
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}

export default UsersTable;