'use client';
import Link from 'next/link';
import { ArrowLeft, Home, DollarSign, TrendingUp, Star } from 'lucide-react';

export default function HostPage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-[#059669] transition">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>

            <div className="bg-gradient-to-br from-[#059669] to-[#047857] text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Become a Host</h1>
                    <p className="text-2xl text-green-50 mb-8 max-w-3xl mx-auto">
                        Share your space and earn extra income. Join thousands of hosts worldwide.
                    </p>
                    <Link
                        href="/host/get-started"
                        className="inline-block bg-white text-[#059669] px-10 py-5 rounded-xl font-bold text-lg hover:bg-green-50 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Host with Stay Shire?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <DollarSign className="w-16 h-16 text-[#059669] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Earn Extra Income</h3>
                        <p className="text-gray-600">Average hosts earn $1,200/month</p>
                    </div>
                    <div className="text-center">
                        <Star className="w-16 h-16 text-[#059669] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Full Control</h3>
                        <p className="text-gray-600">Set your own prices and availability</p>
                    </div>
                    <div className="text-center">
                        <TrendingUp className="w-16 h-16 text-[#059669] mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-3">Host Protection</h3>
                        <p className="text-gray-600">$1M liability coverage included</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Hosting?</h2>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        It takes less than 10 minutes to set up your listing and start earning.
                    </p>
                    <Link
                        href="/host/get-started"
                        className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-10 py-5 rounded-xl font-semibold text-lg transition"
                    >
                        List Your Property
                    </Link>
                </div>
            </div>
        </div>
    );
}
