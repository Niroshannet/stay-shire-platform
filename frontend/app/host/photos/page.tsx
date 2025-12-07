'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plus, Image as ImageIcon, X } from 'lucide-react';

export default function PhotosPage() {
    const [photos, setPhotos] = useState<string[]>([]);

    // Mock functionality for demo purposes
    const addPhoto = () => {
        const mockPhotos = [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80',
            'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80'
        ];
        if (photos.length < 5) {
            setPhotos(prev => [...prev, mockPhotos[prev.length]]);
        }
    };

    const removePhoto = (index: number) => {
        setPhotos(prev => prev.filter((_, i) => i !== index));
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
            <main className="flex-1 max-w-5xl mx-auto w-full px-6 md:px-12 pb-24">
                <div className="mb-8 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-semibold text-[#222222] mb-2"
                    >
                        Add some photos of your house
                    </motion.h1>
                    <p className="text-gray-500">
                        You'll need 5 photos to get started. You can add more or make changes later.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    {photos.length === 0 ? (
                        <div
                            onClick={addPhoto}
                            className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl aspect-[3/2] flex flex-col items-center justify-center cursor-pointer hover:border-gray-800 transition-colors"
                        >
                            <ImageIcon className="w-16 h-16 text-gray-300 mb-4" />
                            <h3 className="text-lg font-semibold text-[#222222] mb-1">Drag your photos here</h3>
                            <p className="text-sm text-gray-500 mb-6">Choose at least 5 photos</p>
                            <div className="text-sm underline font-semibold text-[#222222]">Upload from your device</div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Main (Cover) Photo */}
                            <div className="relative aspect-[3/2] col-span-1 md:col-span-2 group">
                                <img src={photos[0]} alt="Cover" className="w-full h-full object-cover rounded-xl" />
                                <button
                                    onClick={() => removePhoto(0)}
                                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                                <div className="absolute top-3 left-3 px-3 py-1 bg-white rounded-md text-xs font-semibold shadow-sm">Cover photo</div>
                            </div>

                            {/* Other Photos */}
                            {photos.slice(1).map((photo, index) => (
                                <div key={index} className="relative aspect-[3/2] group">
                                    <img src={photo} alt={`Photo ${index + 2}`} className="w-full h-full object-cover rounded-xl" />
                                    <button
                                        onClick={() => removePhoto(index + 1)}
                                        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}

                            {/* Add More Button */}
                            {photos.length < 5 && (
                                <div
                                    onClick={addPhoto}
                                    className="aspect-[3/2] border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-gray-800 transition-colors bg-gray-50"
                                >
                                    <Plus className="w-8 h-8 text-gray-400 mb-2" />
                                    <span className="font-semibold text-[#222222]">Add more</span>
                                </div>
                            )}
                        </div>
                    )}
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar - ~60% */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-gray-900 w-[60%] transition-all duration-500"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/amenities"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <Link
                        href={photos.length >= 5 ? "/host/title" : "#"}
                        className={photos.length < 5 ? 'pointer-events-none' : ''}
                    >
                        <button
                            disabled={photos.length < 5}
                            className={`
                                px-8 py-3 rounded-lg font-semibold text-white transition-all transform active:scale-95
                                ${photos.length >= 5
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
