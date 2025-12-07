'use client';
import Link from 'next/link';
import { ArrowLeft, Shield, Home, Umbrella, FileText } from 'lucide-react';

export default function CoverPage() {
    const coverageTypes = [
        {
            icon: Home,
            title: 'Property Damage Protection',
            coverage: 'Up to $1,000,000',
            description: 'Covers accidental damage to your rental property and belongings.'
        },
        {
            icon: Shield,
            title: 'Liability Protection',
            coverage: 'Up to $1,000,000',
            description: 'Protects you against third-party claims of bodily injury or property damage.'
        },
        {
            icon: Umbrella,
            title: 'Income Loss Protection',
            coverage: 'Up to $50,000',
            description: 'Covers lost income if your property becomes uninhabitable due to covered damage.'
        }
    ];

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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">StayCover Protection</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Comprehensive protection for hosts and guests. Travel and host with confidence.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Coverage Details</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {coverageTypes.map((coverage, index) => (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#059669] transition">
                            <coverage.icon className="w-12 h-12 text-[#059669] mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{coverage.title}</h3>
                            <p className="text-2xl font-bold text-[#059669] mb-3">{coverage.coverage}</p>
                            <p className="text-gray-600">{coverage.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-xl">
                            <h3 className="font-semibold text-lg mb-2">1. Automatic Coverage</h3>
                            <p className="text-gray-600">All bookings are automatically covered at no extra cost.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl">
                            <h3 className="font-semibold text-lg mb-2">2. File a Claim</h3>
                            <p className="text-gray-600">Report incidents within 14 days through your dashboard.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl">
                            <h3 className="font-semibold text-lg mb-2">3. Quick Resolution</h3>
                            <p className="text-gray-600">Our team reviews and processes claims within 5-7 business days.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Need to File a Claim?</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    Our claims team is here to help you through the process.
                </p>
                <Link
                    href="/help"
                    className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                    Contact Support
                </Link>
            </div>
        </div>
    );
}
