'use client';

import { motion } from 'framer-motion';
import { BedDouble, Image as ImageIcon, DoorOpen, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function GetStartedPage() {
    const steps = [
        {
            id: 1,
            title: 'Tell us about your place',
            description: 'Share some basic info, such as where it is and how many guests can stay.',
            icon: BedDouble,
            // Fallback to Icon since 3D generation is rate limited
        },
        {
            id: 2,
            title: 'Make it stand out',
            description: 'Add 5 or more photos plus a title and description – we\'ll help you out.',
            icon: ImageIcon,
        },
        {
            id: 3,
            title: 'Finish up and publish',
            description: 'Choose a starting price, verify a few details, then publish your listing.',
            icon: DoorOpen,
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="px-6 md:px-12 py-6 flex items-center justify-between">
                <div className="w-8">
                    {/* Logo placeholder or simple back for now if needed, but screenshot shows pure layout */}
                    <div className="relative flex items-center justify-center w-8 h-8 bg-[#059669] rounded-lg shadow-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-white"
                        >
                            <path d="M22 20v-7.82a8.38 8.38 0 0 0-7.82-8.38A8.38 8.38 0 0 0 5 12.18V20h17Z" />
                            <path d="M18 20v-4" />
                            <path d="M6 20v-4" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#34D399] rounded-full border border-white"></div>
                    </div>
                </div>
                <Link href="/" className="px-4 py-2 border border-black/10 rounded-full text-sm font-semibold hover:bg-black/5 transition">
                    Exit
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-6 md:px-12 py-8 md:py-16 gap-12 md:gap-24 items-start">
                {/* Left Side: Title */}
                <div className="flex-1 md:sticky md:top-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-[#222222] tracking-tight leading-[1.1]"
                    >
                        It&apos;s easy to get started on Stay shire
                    </motion.h1>
                </div>

                {/* Right Side: Steps */}
                <div className="flex-1 w-full max-w-md">
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className="flex gap-6 pb-8 border-b border-gray-100 last:border-0"
                            >
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#222222] mb-2">{step.id} &nbsp; {step.title}</h3>
                                    <p className="text-[#717171] font-light leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                <div className="shrink-0 w-24 h-24 relative flex items-center justify-center">
                                    {/* Visual Placeholder for 3D Icon */}
                                    <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center">
                                        <step.icon className="w-10 h-10 text-gray-400 stroke-[1.5]" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="px-6 md:px-12 py-6 border-t border-gray-100 flex justify-end bg-white sticky bottom-0 z-10">
                <Link href="/host/structure">
                    <button className="bg-[#059669] hover:bg-[#047857] text-white text-lg font-bold px-8 py-3.5 rounded-lg shadow-sm transition-colors transform active:scale-95">
                        Get started
                    </button>
                </Link>
            </footer>
        </div>
    );
}
