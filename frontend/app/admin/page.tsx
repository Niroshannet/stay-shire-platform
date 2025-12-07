'use client';

import { motion } from 'framer-motion';
import { Users, Home, AlertTriangle, CheckCircle, BarChart2 } from 'lucide-react';

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-slate-900 pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="glass p-6 rounded-3xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400"><Users /></div>
                            <div>
                                <div className="text-slate-400 text-sm font-semibold">Total Users</div>
                                <div className="text-2xl font-bold text-white">1,245</div>
                            </div>
                        </div>
                    </div>
                    <div className="glass p-6 rounded-3xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400"><Home /></div>
                            <div>
                                <div className="text-slate-400 text-sm font-semibold">Properties</div>
                                <div className="text-2xl font-bold text-white">856</div>
                            </div>
                        </div>
                    </div>
                    <div className="glass p-6 rounded-3xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-green-500/20 rounded-xl text-green-400"><BarChart2 /></div>
                            <div>
                                <div className="text-slate-400 text-sm font-semibold">Revenue</div>
                                <div className="text-2xl font-bold text-white">$452k</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Moderation */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="glass p-8 rounded-3xl">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <AlertTriangle className="text-yellow-500" />
                            Flagged Content
                        </h2>
                        <div className="space-y-4">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div>
                                        <h4 className="text-white font-medium">Inappropriate Review</h4>
                                        <p className="text-slate-400 text-sm">Reported by Host • 2 hours ago</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg text-sm font-semibold hover:bg-red-500/30">Remove</button>
                                        <button className="px-3 py-1 bg-green-500/20 text-green-400 rounded-lg text-sm font-semibold hover:bg-green-500/30">Keep</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass p-8 rounded-3xl">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <CheckCircle className="text-green-500" />
                            Pending Approvals
                        </h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <div>
                                        <h4 className="text-white font-medium">New Listing verification</h4>
                                        <p className="text-slate-400 text-sm">Downtown Loft • ID: #8821{i}</p>
                                    </div>
                                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl text-sm font-semibold transition-colors">
                                        Review
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
