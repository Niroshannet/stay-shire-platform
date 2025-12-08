'use client';

import { Search, Shield, Clock, Award, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-56 pb-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Main Headline */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                    Find Your Perfect
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                        Stay Anywhere
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Discover unique homes, apartments, and experiences hosted by locals around the world
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link
                        href="/search"
                        className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                        <Search className="w-5 h-5" />
                        Start Exploring
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                    <Link
                        href="/host/get-started"
                        className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-green-600 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                        Start Earning Today
                    </Link>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                        <div className="text-sm text-gray-600">Secure Payments</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <Clock className="w-8 h-8 text-green-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                        <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">10K+</div>
                        <div className="text-sm text-gray-600">Happy Guests</div>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-gray-900 mb-1">99%</div>
                        <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
