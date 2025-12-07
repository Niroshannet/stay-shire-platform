'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Mock Data
const UPCOMING_TRIPS = [
    {
        id: '1',
        title: 'Luxury Oceanfront Villa',
        location: 'Malibu, California',
        dates: 'Feb 14 - Feb 19, 2024',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
        host: 'Sarah',
        status: 'Confirmed'
    }
];

const PAST_TRIPS = [
    {
        id: '2',
        title: 'Modern Mountain Cabin',
        location: 'Aspen, Colorado',
        dates: 'Dec 10 - Dec 15, 2023',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
        host: 'Mike',
        status: 'Completed'
    }
];

export default function TripsPage() {
    return (
        <div className="min-h-screen bg-slate-900 pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white mb-8">Trips</h1>

                {/* Upcoming */}
                <div className="mb-12">
                    <h2 className="text-xl font-semibold text-white mb-6">Upcoming reservations</h2>

                    {UPCOMING_TRIPS.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {UPCOMING_TRIPS.map((trip) => (
                                <motion.div
                                    key={trip.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={trip.image}
                                            alt={trip.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                                            {trip.status}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs font-bold text-slate-400 uppercase mb-2">{trip.location}</div>
                                        <h3 className="text-lg font-bold text-white mb-1">{trip.title}</h3>
                                        <p className="text-slate-400 text-sm mb-4">Hosted by {trip.host}</p>

                                        <div className="border-t border-white/10 pt-4 mt-4">
                                            <div className="flex items-center gap-2 text-slate-300 mb-4">
                                                <Calendar className="w-4 h-4 text-indigo-400" />
                                                <span className="text-sm font-medium">{trip.dates}</span>
                                            </div>

                                            <Button className="w-full text-sm py-2">View details</Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="glass p-8 rounded-3xl text-center">
                            <h3 className="text-lg font-semibold text-white mb-2">No trips booked... yet!</h3>
                            <p className="text-slate-400 mb-6">Time to dust off your bags and start planning your next adventure.</p>
                            <Link href="/search">
                                <Button>Start searching</Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Past Trips */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-6">Where you've been</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PAST_TRIPS.map((trip) => (
                            <motion.div
                                key={trip.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer group"
                            >
                                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={trip.image}
                                        alt={trip.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-medium truncate">{trip.title}</h3>
                                    <p className="text-slate-400 text-sm mb-1">{trip.location}</p>
                                    <p className="text-slate-500 text-xs">{trip.dates}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
