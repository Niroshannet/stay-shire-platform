'use client';
import Link from 'next/link';
import { ArrowLeft, Shield, Phone, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SafetyPage() {
    const safetyTips = [
        {
            icon: Shield,
            title: 'Verify Your Identity',
            description: 'Complete ID verification to build trust with hosts and guests.'
        },
        {
            icon: CheckCircle,
            title: 'Read Reviews',
            description: 'Check ratings and reviews before booking or accepting reservations.'
        },
        {
            icon: Phone,
            title: 'Keep Communication On-Platform',
            description: 'Use our messaging system to maintain a record of all conversations.'
        },
        {
            icon: AlertTriangle,
            title: 'Report Suspicious Activity',
            description: 'Contact us immediately if something doesn\'t feel right.'
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety & Security</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Your safety is our top priority. Learn about our safety features and best practices.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Safety Guidelines</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {safetyTips.map((tip, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                            <tip.icon className="w-12 h-12 text-[#059669] mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{tip.title}</h3>
                            <p className="text-gray-600">{tip.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 max-w-7xl mx-auto my-8 mx-4 rounded-r-xl">
                <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-red-900 mb-2">Emergency Hotline</h3>
                        <p className="text-red-800 mb-2">
                            If you're in immediate danger, call local emergency services first, then contact us:
                        </p>
                        <p className="text-red-900 font-bold text-xl">+1 (800) 911-SAFE</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Report a Safety Concern</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        If you experience or witness unsafe behavior, please report it immediately.
                    </p>
                    <Link
                        href="/concerns"
                        className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl font-semibold transition"
                    >
                        Report Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
