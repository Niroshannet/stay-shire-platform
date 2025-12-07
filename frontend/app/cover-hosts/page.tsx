'use client';
import Link from 'next/link';
import { ArrowLeft, Shield, Home, FileCheck } from 'lucide-react';

export default function CoverHostsPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Host Protection Program</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Comprehensive protection for your property and peace of mind.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                        <Shield className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">$1M Liability Coverage</h3>
                        <p className="text-gray-600">Protection against third-party claims</p>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                        <Home className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Property Damage</h3>
                        <p className="text-gray-600">Coverage for accidental guest damage</p>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                        <FileCheck className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                        <p className="text-gray-600">Dedicated claims assistance team</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
