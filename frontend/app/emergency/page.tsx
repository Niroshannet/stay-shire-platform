'use client';
import Link from 'next/link';
import { ArrowLeft, Home, Heart, Shield } from 'lucide-react';

export default function EmergencyPage() {
    return (
        <div className="min-h-screen bg-white pt-20">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-[#059669] transition">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>

            <div className="bg-gradient-to-br from-[#059669] to-[#047857] text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Emergency Stays Program</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Providing temporary housing for those in crisis situations.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Home className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Free Housing</h3>
                        <p className="text-gray-600">Temporary stays for those in need</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Heart className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                        <p className="text-gray-600">Hosts volunteering their spaces</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Shield className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Verified Partners</h3>
                        <p className="text-gray-600">Working with trusted organizations</p>
                    </div>
                </div>

                <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-2">Need Emergency Housing?</h3>
                    <p className="text-gray-700 mb-4">
                        If you're facing a crisis and need temporary housing, please contact our emergency team.
                    </p>
                    <Link href="/help" className="text-[#059669] font-semibold hover:underline">
                        Contact Emergency Support →
                    </Link>
                </div>
            </div>
        </div>
    );
}
