'use client';

import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Sparkles, Shield, Zap, Users, Globe, Heart, TrendingUp, Award } from 'lucide-react';

const features = [
    {
        icon: Sparkles,
        title: 'AI-Powered Search',
        description: 'Smart search algorithms that understand your preferences and suggest perfect stays based on your history and behavior.',
        category: 'Search & Discovery',
        status: 'Live'
    },
    {
        icon: Shield,
        title: 'Enhanced Security',
        description: 'Advanced verification system with ID verification, secure payments, and 24/7 trust and safety support.',
        category: 'Trust & Safety',
        status: 'Live'
    },
    {
        icon: Zap,
        title: 'Instant Booking',
        description: 'Book instantly without waiting for host approval. Perfect for last-minute trips and spontaneous getaways.',
        category: 'Booking',
        status: 'Live'
    },
    {
        icon: Users,
        title: 'Co-Host Network',
        description: 'Connect with professional co-hosts to help manage your property and maximize your earnings.',
        category: 'Hosting',
        status: 'Live'
    },
    {
        icon: Globe,
        title: 'Multi-Currency Support',
        description: 'Pay and get paid in your local currency with real-time exchange rates and transparent pricing.',
        category: 'Payments',
        status: 'Live'
    },
    {
        icon: Heart,
        title: 'Guest Favorites',
        description: 'Discover the most loved homes based on guest reviews, ratings, and booking frequency.',
        category: 'Discovery',
        status: 'Live'
    },
    {
        icon: TrendingUp,
        title: 'Dynamic Pricing',
        description: 'Smart pricing tools that help hosts optimize their rates based on demand, seasonality, and local events.',
        category: 'Hosting',
        status: 'Live'
    },
    {
        icon: Award,
        title: 'Superhost Program',
        description: 'Recognition and rewards for exceptional hosts with exclusive benefits and priority support.',
        category: 'Hosting',
        status: 'Live'
    }
];

const upcomingFeatures = [
    {
        title: 'Virtual Tours',
        description: '360° virtual property tours with VR support',
        quarter: 'Q1 2025'
    },
    {
        title: 'Smart Home Integration',
        description: 'Connect with smart locks, thermostats, and security systems',
        quarter: 'Q2 2025'
    },
    {
        title: 'Sustainability Badges',
        description: 'Highlight eco-friendly properties and green practices',
        quarter: 'Q2 2025'
    },
    {
        title: 'Group Booking Tools',
        description: 'Simplified booking for large groups and events',
        quarter: 'Q3 2025'
    }
];

export default function ReleasePage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-1 pt-28 pb-16">
                {/* Hero Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                                <Sparkles className="w-4 h-4" />
                                2025 Release
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                What's New in 2025
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Discover the latest features and improvements that make Stay Shire the best platform for finding and hosting unique stays.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">New Features</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 bg-green-100 rounded-xl">
                                        <feature.icon className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                                {feature.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2">{feature.category}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Features */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                        <p className="text-gray-600 mb-12">Features we're working on for the rest of 2025</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {upcomingFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 rounded-xl p-6"
                                >
                                    <div className="text-sm font-semibold text-indigo-600 mb-2">{feature.quarter}</div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-8 text-center">2025 by the Numbers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-4xl font-bold mb-2">8+</div>
                                <div className="text-green-100">New Features</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">100%</div>
                                <div className="text-green-100">Uptime</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">24/7</div>
                                <div className="text-green-100">Support</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold mb-2">4+</div>
                                <div className="text-green-100">Upcoming Features</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Have feedback or feature requests?
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            We're always listening to our community. Share your ideas and help shape the future of Stay Shire.
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                            Share Your Feedback
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
