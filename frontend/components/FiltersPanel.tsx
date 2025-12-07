'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from '@headlessui/react';
import { X } from 'lucide-react';

interface FiltersPanelProps {
    onClose: () => void;
    onApply: (filters: any) => void;
}

export default function FiltersPanel({ onClose, onApply }: FiltersPanelProps) {
    const [priceRange, setPriceRange] = useState([50, 1000]);
    const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
    const [amenities, setAmenities] = useState<string[]>([]);

    const handleTypeToggle = (type: string) => {
        setPropertyTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const handleAmenityToggle = (amenity: string) => {
        setAmenities(prev =>
            prev.includes(amenity) ? prev.filter(a => a !== amenity) : [...prev, amenity]
        );
    };

    const handleApply = () => {
        onApply({
            minPrice: priceRange[0],
            maxPrice: priceRange[1],
            propertyTypes,
            amenities,
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-slate-900 border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
            >
                {/* Header */}
                <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-6 flex justify-between items-center z-10">
                    <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                        <X className="w-5 h-5 text-white" />
                    </button>
                    <h2 className="text-xl font-bold text-white">Filters</h2>
                    <button
                        onClick={() => {
                            setPriceRange([50, 1000]);
                            setPropertyTypes([]);
                            setAmenities([]);
                        }}
                        className="text-sm font-semibold text-slate-400 hover:underline"
                    >
                        Reset
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Price Range */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Price range (per night)</h3>
                        <div className="px-2">
                            <input
                                type="range"
                                min="0"
                                max="2000"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                className="w-full accent-indigo-500"
                            />
                            <div className="flex justify-between items-center mt-4">
                                <div className="p-3 rounded-xl border border-white/20">
                                    <div className="text-xs text-slate-400 uppercase">Min Price</div>
                                    <div className="text-white font-medium">${priceRange[0]}</div>
                                </div>
                                <div className="text-slate-500">-</div>
                                <div className="p-3 rounded-xl border border-white/20">
                                    <div className="text-xs text-slate-400 uppercase">Max Price</div>
                                    <div className="text-white font-medium">${priceRange[1]}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10" />

                    {/* Property Type */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Type of place</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {['House', 'Apartment', 'Guesthouse', 'Hotel'].map((type) => (
                                <div
                                    key={type}
                                    onClick={() => handleTypeToggle(type)}
                                    className={`border rounded-xl p-4 cursor-pointer transition-all ${propertyTypes.includes(type)
                                            ? 'border-indigo-500 bg-indigo-500/10'
                                            : 'border-white/20 hover:border-white/40'
                                        }`}
                                >
                                    <div className="font-semibold text-white">{type}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-white/10" />

                    {/* Amenities */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Amenities</h3>
                        <div className="space-y-4">
                            {['Wifi', 'Kitchen', 'Washer', 'Dryer', 'AC', 'Heating', 'Pool', 'Gym', 'Parking'].map((amenity) => (
                                <label key={amenity} className="flex items-center gap-3 cursor-pointer group">
                                    <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${amenities.includes(amenity)
                                            ? 'bg-indigo-500 border-indigo-500 text-white'
                                            : 'border-white/30 group-hover:border-white/50'
                                        }`}>
                                        {amenities.includes(amenity) && <span className="text-sm">✓</span>}
                                    </div>
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={amenities.includes(amenity)}
                                        onChange={() => handleAmenityToggle(amenity)}
                                    />
                                    <span className="text-slate-200">{amenity}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-slate-900 border-t border-white/10 p-6 flex justify-between items-center z-10">
                    <button
                        onClick={onClose}
                        className="text-white hover:bg-white/10 px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleApply}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                        Show homes
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
