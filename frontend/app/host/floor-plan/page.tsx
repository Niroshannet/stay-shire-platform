'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export default function FloorPlanPage() {
    const [counters, setCounters] = useState({
        guests: 4,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1
    });

    const updateCounter = (key: keyof typeof counters, value: number) => {
        setCounters(prev => ({
            ...prev,
            [key]: Math.max(key === 'bathrooms' ? 0.5 : 1, prev[key] + value)
        }));
    };

    const CounterItem = ({ label, propKey }: { label: string, propKey: keyof typeof counters }) => (
        <div className="flex items-center justify-between py-6 border-b border-gray-100 last:border-0">
            <span className="text-lg text-[#222222]">{label}</span>
            <div className="flex items-center gap-4">
                <button
                    onClick={() => updateCounter(propKey, propKey === 'bathrooms' && counters[propKey] % 1 !== 0 ? -0.5 : -1)}
                    disabled={counters[propKey] <= (propKey === 'bathrooms' ? 0.5 : 1)}
                    className={`
                        w-8 h-8 rounded-full border flex items-center justify-center transition-colors
                        ${counters[propKey] <= (propKey === 'bathrooms' ? 0.5 : 1)
                            ? 'border-gray-200 text-gray-200 cursor-not-allowed'
                            : 'border-gray-400 text-gray-600 hover:border-black hover:text-black'
                        }
                    `}
                >
                    <Minus className="w-4 h-4" />
                </button>
                <span className="w-4 text-center text-[#222222]">{counters[propKey]}</span>
                <button
                    onClick={() => updateCounter(propKey, propKey === 'bathrooms' ? 0.5 : 1)}
                    className="w-8 h-8 rounded-full border border-gray-400 text-gray-600 flex items-center justify-center hover:border-black hover:text-black transition-colors"
                >
                    <Plus className="w-4 h-4" />
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="px-6 md:px-12 py-6 flex items-center justify-end">
                <Link href="/host/get-started" className="px-4 py-2 border border-black/10 rounded-full text-sm font-semibold hover:bg-black/5 transition">
                    Save & exit
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-2xl mx-auto w-full px-6 md:px-12 pb-24 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl md:text-3xl font-semibold text-[#222222] mb-2">
                            Share some basics about your place
                        </h1>
                        <p className="text-gray-500">
                            You'll add more details later, like bed types.
                        </p>
                    </div>

                    <div>
                        <CounterItem label="Guests" propKey="guests" />
                        <CounterItem label="Bedrooms" propKey="bedrooms" />
                        <CounterItem label="Beds" propKey="beds" />
                        <CounterItem label="Bathrooms" propKey="bathrooms" />
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar - ~40% */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-gray-900 w-[40%] transition-all duration-500"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/location"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <Link href="/host/amenities">
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
