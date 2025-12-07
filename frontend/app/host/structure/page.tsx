'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Home, Building2, Warehouse, Coffee, Anchor, Tent, Bus, Castle, Mountain,
    Box, Wheat, Building, Trees, Wind, Landmark, TowerControl as Tower
} from 'lucide-react';

// Structure data mapping
const structures = [
    { id: 'house', label: 'House', icon: Home },
    { id: 'apartment', label: 'Apartment', icon: Building2 },
    { id: 'barn', label: 'Barn', icon: Warehouse },
    { id: 'bnb', label: 'Bed & breakfast', icon: Coffee },
    { id: 'boat', label: 'Boat', icon: Anchor },
    { id: 'cabin', label: 'Cabin', icon: Tent },
    { id: 'campervan', label: 'Campervan/motorhome', icon: Bus },
    { id: 'casa_particular', label: 'Casa particular', icon: Home },
    { id: 'castle', label: 'Castle', icon: Castle },
    { id: 'cave', label: 'Cave', icon: Mountain },
    { id: 'container', label: 'Container', icon: Box },
    { id: 'cycladic', label: 'Cycladic home', icon: Home },
    { id: 'dammuso', label: 'Dammuso', icon: Home },
    { id: 'dome', label: 'Dome', icon: Landmark },
    { id: 'earth_home', label: 'Earth home', icon: Mountain },
    { id: 'farm', label: 'Farm', icon: Wheat },
    { id: 'guesthouse', label: 'Guesthouse', icon: Home },
    { id: 'hotel', label: 'Hotel', icon: Building },
    { id: 'houseboat', label: 'Houseboat', icon: Anchor },
    { id: 'kehan', label: 'Kehan', icon: Home },
    { id: 'minsu', label: 'Minsu', icon: Home },
    { id: 'riad', label: 'Riad', icon: Home },
    { id: 'ryokan', label: 'Ryokan', icon: Home },
    { id: 'shepherds_hut', label: "Shepherd's hut", icon: Home },
    { id: 'tent', label: 'Tent', icon: Tent },
    { id: 'tiny_home', label: 'Tiny home', icon: Home },
    { id: 'tower', label: 'Tower', icon: Tower },
    { id: 'treehouse', label: 'Treehouse', icon: Trees },
    { id: 'trullo', label: 'Trullo', icon: Home },
    { id: 'windmill', label: 'Windmill', icon: Wind },
    { id: 'yurt', label: 'Yurt', icon: Tent },
];

export default function StructurePage() {
    const [selectedStructure, setSelectedStructure] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="px-6 md:px-12 py-6 flex items-center justify-end">
                <Link href="/host/get-started" className="px-4 py-2 border border-black/10 rounded-full text-sm font-semibold hover:bg-black/5 transition">
                    Save & exit
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pb-24">
                <div className="mb-8 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-semibold text-[#222222]"
                    >
                        Which of these best describes your place?
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {structures.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedStructure(item.id)}
                            className={`
                                flex flex-col gap-4 p-4 rounded-xl border transition-all duration-200 text-left hover:border-[#059669]
                                ${selectedStructure === item.id
                                    ? 'border-[#059669] bg-emerald-50 ring-1 ring-[#059669]'
                                    : 'border-gray-200 bg-white'
                                }
                            `}
                        >
                            <item.icon className={`w-8 h-8 ${selectedStructure === item.id ? 'text-[#059669]' : 'text-[#222222]'}`} strokeWidth={1.5} />
                            <span className="font-semibold text-[#222222]">{item.label}</span>
                        </button>
                    ))}
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-gray-900 w-[10%] transition-all duration-500"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/get-started"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <Link
                        href={selectedStructure ? "/host/privacy-type" : "#"}
                        className={!selectedStructure ? 'pointer-events-none' : ''}
                    >
                        <button
                            disabled={!selectedStructure}
                            className={`
                                px-8 py-3 rounded-lg font-semibold text-white transition-all transform active:scale-95
                                ${selectedStructure
                                    ? 'bg-[#059669] hover:bg-[#047857]'
                                    : 'bg-[#DDDDDD] cursor-not-allowed'
                                }
                            `}
                        >
                            Next
                        </button>
                    </Link>
                </div>
            </footer>
        </div>
    );
}
