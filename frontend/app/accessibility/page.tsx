'use client';
import Link from 'next/link';
import { ArrowLeft, Accessibility, Ear, Eye, MessageCircle } from 'lucide-react';

export default function AccessibilityPage() {
    const features = [
        {
            icon: Eye,
            title: 'Visual Accessibility',
            description: 'Screen reader support, high contrast mode, and adjustable text sizes.'
        },
        {
            icon: Ear,
            title: 'Audio Accessibility',
            description: 'Captions, transcripts, and visual alerts for audio content.'
        },
        {
            icon: MessageCircle,
            title: 'Communication Support',
            description: 'Multiple contact methods including text, email, and video chat.'
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Accessibility Support</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        We're committed to making Stay Shire accessible to everyone.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Features</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                            <feature.icon className="w-12 h-12 text-[#059669] mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-green-50 border-l-4 border-[#059669] p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-2">Need Assistance?</h3>
                    <p className="text-gray-700 mb-4">
                        Our accessibility support team is available 24/7 to help you navigate our platform and book your perfect stay.
                    </p>
                    <Link href="/help" className="text-[#059669] font-semibold hover:underline">
                        Contact Accessibility Support →
                    </Link>
                </div>
            </div>
        </div>
    );
}
