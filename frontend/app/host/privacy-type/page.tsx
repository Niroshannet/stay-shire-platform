'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, DoorOpen, Users } from 'lucide-react';

const privacyOptions = [
    {
        id: 'entire-place',
        title: 'An entire place',
        description: 'Guests have the whole place to themselves.',
        icon: Home
    },
    {
        id: 'private-room',
        title: 'A room',
        description: 'Guests have their own room in a home, plus access to shared spaces.',
        icon: DoorOpen
    },
    {
        id: 'shared-room',
        title: 'A shared room in a hostel',
        description: 'Guests sleep in a shared room in a professionally managed hostel with staff on-site 24/7.',
        icon: Users
    }
];

export default function PrivacyTypePage() {
    const [selectedType, setSelectedType] = useState<string | null>(null);

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
                <div className="mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-semibold text-[#222222] text-center md:text-left mb-8"
                    >
                        What type of place will guests have?
                    </motion.h1>

                    <div className="space-y-4">
                        {privacyOptions.map((option, index) => (
                            <motion.button
                                key={option.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                onClick={() => setSelectedType(option.id)}
                                className={`
                                    w-full flex items-center justify-between p-6 rounded-xl border text-left transition-all duration-200
                                    ${selectedType === option.id
                                        ? 'border-[#059669] bg-emerald-50 ring-1 ring-[#059669]'
                                        : 'border-gray-200 bg-white hover:border-[#059669]'
                                    }
                                `}
                            >
                                <div className="pr-4">
                                    <h3 className="text-lg font-semibold text-[#222222] mb-1">{option.title}</h3>
                                    <p className="text-gray-500 text-sm">{option.description}</p>
                                </div>
                                <option.icon className={`w-8 h-8 shrink-0 ${selectedType === option.id ? 'text-[#059669]' : 'text-[#222222]'}`} strokeWidth={1.5} />
                            </motion.button>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar - ~20% */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-gray-900 w-[20%] transition-all duration-500"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/structure"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <Link
                        href={selectedType ? "/host/location" : "#"}
                        className={!selectedType ? 'pointer-events-none' : ''}
                    >
                        <button
                            disabled={!selectedType}
                            className={`
                                px-8 py-3 rounded-lg font-semibold text-white transition-all transform active:scale-95
                                ${selectedType
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
