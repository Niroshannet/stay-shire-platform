'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    Wifi, Tv, ChefHat, Waves, Car, ThermometerSnowflake, Monitor,
    Flame, AlertCircle, ShieldCheck, FireExtinguisher
} from 'lucide-react';

const amenityGroups = [
    {
        title: 'Favorites',
        items: [
            { id: 'wifi', label: 'Wifi', icon: Wifi },
            { id: 'tv', label: 'TV', icon: Tv },
            { id: 'kitchen', label: 'Kitchen', icon: ChefHat },
            { id: 'washer', label: 'Washer', icon: Waves },
            { id: 'parking', label: 'Free parking', icon: Car },
            { id: 'ac', label: 'Air conditioning', icon: ThermometerSnowflake },
            { id: 'workspace', label: 'Dedicated workspace', icon: Monitor },
        ]
    },
    {
        title: 'Safety items',
        items: [
            { id: 'smoke_alarm', label: 'Smoke alarm', icon: Flame },
            { id: 'first_aid', label: 'First aid kit', icon: AlertCircle },
            { id: 'fire_ext', label: 'Fire extinguisher', icon: FireExtinguisher },
        ]
    }
];

export default function AmenitiesPage() {
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

    const toggleAmenity = (id: string) => {
        setSelectedAmenities(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="px-6 md:px-12 py-6 flex items-center justify-end">
                <Link href="/host/get-started" className="px-4 py-2 border border-black/10 rounded-full text-sm font-semibold hover:bg-black/5 transition">
                    Save & exit
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-4xl mx-auto w-full px-6 md:px-12 pb-24">
                <div className="mb-8 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-semibold text-[#222222] mb-2"
                    >
                        Tell guests what your place has to offer
                    </motion.h1>
                    <p className="text-gray-500">
                        You can add more amenities after you publish your listing.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-10"
                >
                    {amenityGroups.map((group) => (
                        <div key={group.title}>
                            <h3 className="text-lg font-semibold text-[#222222] mb-4">{group.title}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {group.items.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleAmenity(item.id)}
                                        className={`
                                            flex flex-col gap-3 p-4 rounded-xl border transition-all duration-200 text-left hover:border-[#222222]
                                            ${selectedAmenities.includes(item.id)
                                                ? 'border-[#222222] bg-gray-50 ring-1 ring-[#222222]'
                                                : 'border-gray-200 bg-white'
                                            }
                                        `}
                                    >
                                        <item.icon className="w-8 h-8 text-[#222222]" strokeWidth={1.5} />
                                        <span className="font-medium text-[#222222]">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar - ~50% */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-gray-900 w-[50%] transition-all duration-500"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/floor-plan"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <Link href="/host/photos">
                        <button
                            className="bg-[#059669] hover:bg-[#047857] px-8 py-3 rounded-lg font-semibold text-white transition-all transform active:scale-95"
                        >
                            Next
                        </button>
                    </Link>
                </div>
            </footer>
        </div>
    );
}
