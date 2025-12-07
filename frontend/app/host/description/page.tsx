'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DescriptionPage() {
    const [description, setDescription] = useState('');
    const MAX_LENGTH = 500;

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
                            Create your description
                        </h1>
                        <p className="text-gray-500">
                            Share what makes your place special.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <textarea
                            value={description}
                            onChange={(e) => {
                                if (e.target.value.length <= MAX_LENGTH) {
                                    setDescription(e.target.value);
                                }
                            }}
                            className="w-full text-lg text-[#222222] p-4 rounded-xl border border-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all resize-none min-h-[200px]"
                            placeholder="You'll be charmed by this adorable place to stay."
                        />
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{description.length}/{MAX_LENGTH} characters</span>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar - ~85% */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-gray-900 w-[85%] transition-all duration-500"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/title"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <Link
                        href={description.length > 0 ? "/host/price" : "#"}
                        className={description.length === 0 ? 'pointer-events-none' : ''}
                    >
                        <button
                            disabled={description.length === 0}
                            className={`
                                px-8 py-3 rounded-lg font-semibold text-white transition-all transform active:scale-95
                                ${description.length > 0
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
