'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Grid } from 'lucide-react';

interface ImageGalleryProps {
    images: string[];
    title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* Grid Layout - Rounded corners strictly applied to outer container */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[400px] md:h-[480px] rounded-xl overflow-hidden relative">
                {/* Main Image */}
                <div
                    className="col-span-2 row-span-2 relative cursor-pointer group"
                    onClick={() => openLightbox(0)}
                >
                    <Image
                        src={images[0]}
                        alt={title}
                        fill
                        className="object-cover group-hover:brightness-95 transition-all duration-200"
                    />
                </div>

                {/* Secondary Images */}
                {images.slice(1, 5).map((img, idx) => (
                    <div
                        key={idx}
                        className="relative cursor-pointer group overflow-hidden"
                        onClick={() => openLightbox(idx + 1)}
                    >
                        <Image
                            src={img}
                            alt={`${title} ${idx + 1}`}
                            fill
                            className="object-cover group-hover:brightness-95 transition-all duration-200"
                        />

                        {/* Show 'Show all photos' button on the last image if there are more */}
                        {idx === 3 && images.length > 5 && (
                            <div className="absolute bottom-4 right-4 z-10">
                                <button className="bg-white px-3 py-1.5 rounded-lg border border-black/10 shadow-sm flex items-center gap-2 text-green-600 text-sm font-semibold hover:bg-gray-50 transition-colors">
                                    <Grid className="w-4 h-4" />
                                    Show all photos
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            className="absolute top-4 left-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors z-50"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <button
                            className="absolute left-4 p-4 text-white hover:bg-white/10 rounded-full transition-colors hidden md:block z-50"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-6xl aspect-[16/9] md:aspect-[3/2]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`${title} ${currentIndex + 1}`}
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        <button
                            className="absolute right-4 p-4 text-white hover:bg-white/10 rounded-full transition-colors hidden md:block z-50"
                            onClick={nextImage}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 font-medium bg-black/50 px-4 py-1 rounded-full text-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
