'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface BookingWidgetProps {
    price: number;
    rating?: number;
    reviewsCount?: number;
    maxGuests: number;
}

export default function BookingWidget({ price, rating, reviewsCount, maxGuests }: BookingWidgetProps) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [guests, setGuests] = useState(1);
    const [isGuestMenuOpen, setIsGuestMenuOpen] = useState(false);

    const nights = startDate && endDate
        ? Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
        : 0;

    const total = nights * price;
    const serviceFee = Math.round(total * 0.12); // Example fee logic
    // const grandTotal = total + serviceFee; // Removed grandTotal since ref only shows Reserve button area initially usually

    return (
        <div className="bg-white rounded-xl p-6 border border-[#DDDDDD] shadow-[0_6px_16px_rgba(0,0,0,0.12)] sticky top-24">
            {/* Header */}
            <div className="mb-6">
                {/* Replicating "£95 for 2 nights" structure if dates selected, or nightly price */}
                {startDate && endDate && nights > 0 ? (
                    <div>
                        <span className="text-[22px] font-bold text-[#222222]">£{total}</span>
                        <span className="text-[#222222] font-normal"> for {nights} nights</span>
                    </div>
                ) : (
                    <div>
                        <span className="text-[22px] font-bold text-[#222222]">£{price}</span>
                        <span className="text-[#222222] font-normal"> night</span>
                    </div>
                )}
            </div>

            {/* Inputs Box */}
            <div className="border border-[#B0B0B0] rounded-lg mb-4">
                <div className="flex border-b border-[#B0B0B0]">
                    <div className="w-1/2 p-3 border-r border-[#B0B0B0] relative">
                        <div className="text-[10px] font-extrabold uppercase text-[#222222] tracking-wider mb-0.5">Check-in</div>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            selectsStart
                            startDate={startDate || undefined}
                            endDate={endDate || undefined}
                            placeholderText="Add date"
                            className="w-full outline-none text-[#222222] text-sm placeholder:text-[#717171] cursor-pointer bg-transparent" dateFormat="d/M/yyyy"
                        />
                    </div>
                    <div className="w-1/2 p-3 relative">
                        <div className="text-[10px] font-extrabold uppercase text-[#222222] tracking-wider mb-0.5">Checkout</div>
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            selectsEnd
                            startDate={startDate || undefined}
                            endDate={endDate || undefined}
                            minDate={startDate || undefined}
                            placeholderText="Add date"
                            className="w-full outline-none text-[#222222] text-sm placeholder:text-[#717171] cursor-pointer bg-transparent"
                            dateFormat="d/M/yyyy"
                        />
                    </div>
                </div>
                <div className="relative">
                    <div
                        className="p-3 cursor-pointer flex justify-between items-center"
                        onClick={() => setIsGuestMenuOpen(!isGuestMenuOpen)}
                    >
                        <div>
                            <div className="text-[10px] font-extrabold uppercase text-[#222222] tracking-wider mb-0.5">Guests</div>
                            <div className="text-[#222222] text-sm">{guests} guest{guests !== 1 ? 's' : ''}</div>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-[#222222] transition-transform ${isGuestMenuOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Guests Dropdown */}
                    <AnimatePresence>
                        {isGuestMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute top-full left-0 right-0 bg-white mt-2 p-4 rounded-xl z-20 shadow-[0_6px_16px_rgba(0,0,0,0.12)] border border-[#DDDDDD]"
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-semibold text-[#222222]">Adults</h3>
                                        <p className="text-sm text-[#717171]">Age 13+</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
                                            disabled={guests <= 1}
                                            onClick={() => setGuests(guests - 1)}
                                        >
                                            -
                                        </button>
                                        <span className="text-[#222222] font-medium w-4 text-center">{guests}</span>
                                        <button
                                            className="w-8 h-8 rounded-full border border-[#DDDDDD] flex items-center justify-center text-[#717171] hover:border-black hover:text-black disabled:opacity-20 disabled:hover:border-[#DDDDDD] disabled:hover:text-[#717171] transition-colors"
                                            disabled={guests >= maxGuests}
                                            onClick={() => setGuests(guests + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Check Availability / Reserve Button */}
            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-lg py-3.5 rounded-lg transition-transform active:scale-[0.98] mb-4">
                {startDate && endDate ? 'Reserve' : 'Check availability'}
            </button>

            {/* Footer Text */}
            <div className="text-center">
                <button className="text-[#222222] underline font-semibold text-sm">Free cancellation before 8 Jan</button>
            </div>

            <div className="text-center mt-4 text-[#717171] text-sm">
                You won't be charged yet
            </div>
        </div>
    );
}

