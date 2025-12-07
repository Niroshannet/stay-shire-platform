'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ChevronLeft, Star, ShieldCheck } from 'lucide-react';
import PaymentForm from '@/components/PaymentForm';
import Image from 'next/image';

// Mock data (would come from API)
const PROPERTY = {
    id: '1',
    title: 'Luxury Oceanfront Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviews: 128,
    price: 850,
    host: 'Sarah',
};

export default function BookingPage({ params }: { params: { propertyId: string } }) {
    const router = useRouter();
    const [step, setStep] = useState(1);

    // Mock booking details
    const checkIn = new Date();
    const checkOut = new Date(new Date().setDate(checkIn.getDate() + 5));
    const guests = 2;
    const total = PROPERTY.price * 5 + 150; // 5 nights + service fee

    return (
        <div className="min-h-screen bg-slate-900 pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <h1 className="text-3xl font-bold text-white">Confirm and pay</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Main Content */}
                    <div className="space-y-8">
                        {/* Trip Details */}
                        <div className="glass p-6 rounded-2xl">
                            <h2 className="text-xl font-semibold text-white mb-4">Your Trip</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-slate-300">
                                    <div>
                                        <div className="font-medium text-white">Dates</div>
                                        <div>{checkIn.toLocaleDateString()} – {checkOut.toLocaleDateString()}</div>
                                    </div>
                                    <button className="text-indigo-400 font-semibold hover:underline">Edit</button>
                                </div>
                                <div className="flex justify-between items-center text-slate-300">
                                    <div>
                                        <div className="font-medium text-white">Guests</div>
                                        <div>{guests} guest{guests > 1 ? 's' : ''}</div>
                                    </div>
                                    <button className="text-indigo-400 font-semibold hover:underline">Edit</button>
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <PaymentForm
                            amount={total}
                            onSuccess={() => router.push('/book/success')}
                        />
                    </div>

                    {/* Sidebar - Property Info */}
                    <div className="md:pl-12">
                        <div className="glass p-6 rounded-2xl sticky top-28">
                            <div className="flex gap-4 mb-6">
                                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={PROPERTY.image}
                                        alt={PROPERTY.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 mb-1">Entire villa</div>
                                    <h3 className="text-white font-medium line-clamp-2 mb-1">{PROPERTY.title}</h3>
                                    <div className="flex items-center gap-1 text-sm">
                                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                        <span className="text-white font-medium">{PROPERTY.rating}</span>
                                        <span className="text-slate-400">({PROPERTY.reviews} reviews)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-white/10 py-4 space-y-3">
                                <h3 className="font-semibold text-white">Price details</h3>
                                <div className="flex justify-between text-slate-300">
                                    <span>${PROPERTY.price} x 5 nights</span>
                                    <span>${PROPERTY.price * 5}</span>
                                </div>
                                <div className="flex justify-between text-slate-300">
                                    <span>Service fee</span>
                                    <span>$150</span>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-4 flex justify-between font-bold text-lg">
                                <span className="text-white">Total (USD)</span>
                                <span className="text-white">${total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
