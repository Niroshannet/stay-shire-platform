'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface BecomeHostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BecomeHostModal({ isOpen, onClose }: BecomeHostModalProps) {
    const [selected, setSelected] = useState<string | null>(null);
    const router = useRouter();

    const handleNext = () => {
        onClose();
        router.push('/host/get-started');
    };

    const options = [
        { id: 'home', label: 'Home', image: '/assets/host-modal/home.png' },
        { id: 'experience', label: 'Experience', image: '/assets/host-modal/experience.png' },
        { id: 'service', label: 'Service', image: '/assets/host-modal/service.png' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4"
                    >
                        <div className="bg-white rounded-[32px] w-full max-w-3xl flex flex-col pointer-events-auto shadow-2xl overflow-hidden relative">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6">
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-800" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col items-center justify-center px-8 pb-10">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#222222] mb-10 text-center tracking-tight">
                                    What would you like to host?
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                                    {options.map((option) => {
                                        const isSelected = selected === option.id;
                                        return (
                                            <div
                                                key={option.id}
                                                onClick={() => setSelected(option.id)}
                                                className={`
                                                    aspect-square rounded-2xl border-2 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 transform
                                                    ${isSelected ? 'border-black bg-gray-50 scale-105 shadow-md' : 'border-gray-200 hover:border-gray-400 hover:shadow-lg hover:scale-105'}
                                                `}
                                            >
                                                {/* Image Wrapper */}
                                                <div className="relative w-32 h-32">
                                                    <Image
                                                        src={option.image}
                                                        alt={option.label}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <span className={`text-lg font-semibold transition-colors ${isSelected ? 'text-black' : 'text-gray-700'}`}>
                                                    {option.label}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-8 py-5 border-t border-gray-100 flex justify-end bg-white">
                                <button
                                    onClick={handleNext}
                                    disabled={!selected}
                                    className={`
                                        px-8 py-3.5 rounded-xl font-bold text-white transition-all transform active:scale-95
                                        ${selected ? 'bg-[#222222] hover:bg-black shadow-lg' : 'bg-gray-200 cursor-not-allowed'}
                                    `}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
