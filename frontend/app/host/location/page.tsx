'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';

// Mock autocomplete data
const MOCK_SUGGESTIONS = [
    { id: '1', main: 'London Luton Airport (LTN)', sub: 'Airport Way, Luton, UK' },
    { id: '2', main: 'London', sub: 'UK' },
    { id: '3', main: 'London Heathrow Airport (LHR)', sub: 'Hounslow, UK' },
    { id: '4', main: 'London Gatwick Airport (LGW)', sub: 'Horley, Gatwick, UK' },
    { id: '5', main: 'London City Airport (LCY)', sub: 'Hartmann Rd, London, UK' },
    { id: '6', main: 'London Bridge Station', sub: 'London, UK' },
    { id: '7', main: 'Bushey', sub: 'Watford, UK' },
    { id: '8', main: 'Bushey Heath', sub: 'Bushey, UK' },
    { id: '9', main: 'Bushey Station', sub: 'Pinner Road, Watford, UK' },
];

export default function LocationPage() {
    const [address, setAddress] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState(MOCK_SUGGESTIONS);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close suggestions when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setAddress(val);
        if (val.length > 0) {
            setShowSuggestions(true);

            // Filter existing mocks
            const filtered = MOCK_SUGGESTIONS.filter(item =>
                item.main.toLowerCase().includes(val.toLowerCase()) ||
                item.sub.toLowerCase().includes(val.toLowerCase())
            );

            // If no matches, generate a "fake" match to simulate finding the address
            if (filtered.length === 0) {
                setSuggestions([
                    { id: 'custom-1', main: val, sub: 'United Kingdom' },
                    { id: 'custom-2', main: `${val}, Bushey`, sub: 'UK' }, // Contextual guess
                ]);
            } else {
                setSuggestions(filtered);
            }
        } else {
            setShowSuggestions(false);
        }
    };

    const handleSelect = (main: string) => {
        setAddress(main);
        setShowSuggestions(false);
    };

    const clearInput = () => {
        setAddress('');
        setShowSuggestions(false);
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
            <main className="flex-1 max-w-2xl mx-auto w-full px-6 md:px-0 pb-32 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className="text-left">
                        <h1 className="text-[32px] font-semibold text-[#222222] mb-3">
                            Where's your place located?
                        </h1>
                        <p className="text-[#717171] text-lg">
                            Your address is only shared with guests after they've made a reservation.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="relative" ref={modalRef}>
                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-[#222222] w-5 h-5 stroke-[2.5]" />
                            <input
                                type="text"
                                placeholder="Enter your address"
                                value={address}
                                onChange={handleInputChange}
                                onFocus={() => address.length > 0 && setShowSuggestions(true)}
                                className="w-full pl-14 pr-12 py-4 rounded-xl border border-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-500 text-lg text-[#222222]"
                            />
                            {address.length > 0 && (
                                <button
                                    onClick={clearInput}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-4 h-4 text-[#222222]" />
                                </button>
                            )}

                            {/* Autocomplete Dropdown */}
                            <AnimatePresence>
                                {showSuggestions && suggestions.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-20 max-h-[320px] overflow-y-auto"
                                    >
                                        {suggestions.map((item) => (
                                            <div
                                                key={item.id}
                                                onClick={() => handleSelect(item.main)}
                                                className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100 last:border-0"
                                            >
                                                <div className="bg-[#F7F7F7] p-3 rounded-full shrink-0">
                                                    <MapPin className="w-5 h-5 text-[#222222]" />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-[#222222]">{item.main}</div>
                                                    <div className="text-sm text-[#717171]">{item.sub}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-[400px] bg-[#F7F7F7] rounded-xl relative overflow-hidden flex items-center justify-center -z-0">
                            {/* Dotted pattern */}
                            <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#222_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>

                            <div className="text-center bg-white px-8 py-6 rounded-2xl shadow-lg relative z-10 min-w-[200px]">
                                <MapPin className="w-10 h-10 text-green-600 mx-auto mb-3 stroke-[2]" />
                                <p className="font-bold text-[#222222] text-lg">Map Preview</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-[#222222] w-[30%]"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/privacy-type"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <Link
                        href={address.length > 5 ? "/host/floor-plan" : "#"}
                        className={address.length <= 5 ? 'pointer-events-none' : ''}
                    >
                        <button
                            disabled={address.length <= 5}
                            className={`
                                px-8 py-3 rounded-lg font-semibold text-white transition-all transform active:scale-95 text-lg
                                ${address.length > 5
                                    ? 'bg-green-600 hover:bg-green-700'
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
