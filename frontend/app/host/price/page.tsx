'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

export default function PricePage() {
    const [price, setPrice] = useState(50);

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
                            Now, set your price
                        </h1>
                        <p className="text-gray-500">
                            You can change it anytime.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setPrice(Math.max(10, price - 5))}
                                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors bg-white shadow-sm"
                            >
                                <Minus className="w-5 h-5" />
                            </button>
                            <div className="relative">
                                <span className="absolute top-2 left-0 text-4xl font-semibold text-[#222222]">$</span>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                    className="w-48 text-center text-7xl font-bold text-[#222222] bg-transparent outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                            <button
                                onClick={() => setPrice(price + 5)}
                                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors bg-white shadow-sm"
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="mt-4 text-gray-500">
                            per night
                        </div>
                        <div className="mt-8 text-sm text-gray-500">
                            Places like yours in your area usually range from $42 to $70
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar - ~95% */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-gray-900 w-[95%] transition-all duration-500"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/description"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <Link href="/host/receipt">
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
