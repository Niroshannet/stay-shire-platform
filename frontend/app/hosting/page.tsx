'use client';

import { motion } from 'framer-motion';
import { Plus, BarChart3, Home, Calendar, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// Mock Stats
const STATS = [
    { label: 'Total Earnings', value: '$12,450', icon: DollarSign, trend: '+12%' },
    { label: 'Views (30d)', value: '1,240', icon: Users, trend: '+5%' },
    { label: 'Bookings', value: '24', icon: Calendar, trend: '+8%' },
    { label: 'Occupancy Rate', value: '85%', icon: Home, trend: '+2%' },
];

export default function HostingPage() {
    return (
        <div className="min-h-screen bg-slate-900 pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold text-white">Host Dashboard</h1>
                    <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Create listing
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {STATS.map((stat, idx) => (
                        <motion.div
                            // Fixed: Using stat instead of state
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-6 rounded-3xl"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-white/5 rounded-xl">
                                    <stat.icon className="w-6 h-6 text-indigo-400" />
                                </div>
                                <span className="text-green-400 text-sm font-bold bg-green-500/10 px-2 py-1 rounded-full">
                                    {stat.trend}
                                </span>
                            </div>
                            <h3 className="text-slate-400 text-sm font-medium mb-1">{stat.label}</h3>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Recent Reservations */}
                    <div className="lg:col-span-2 glass rounded-3xl p-8">
                        <h2 className="text-xl font-bold text-white mb-6">Recent Reservations</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer border border-white/5 hover:border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            JD
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">John Doe</h4>
                                            <p className="text-slate-400 text-sm">Feb 14 - Feb 19 • 5 nights</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-white font-bold">$850</div>
                                        <div className="text-green-400 text-sm">Confirmed</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-6 text-indigo-400 font-semibold hover:text-indigo-300">
                            View all reservations
                        </button>
                    </div>

                    {/* Action Items */}
                    <div className="glass rounded-3xl p-8">
                        <h2 className="text-xl font-bold text-white mb-6">Action Needed</h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl">
                                <h4 className="text-yellow-200 font-semibold mb-1">New Review</h4>
                                <p className="text-yellow-200/70 text-sm">Sarah left a 5-star review for "Oceanfront Villa"</p>
                            </div>
                            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                                <h4 className="text-blue-200 font-semibold mb-1">Inquiry</h4>
                                <p className="text-blue-200/70 text-sm">Mike is asking about availability in March</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
