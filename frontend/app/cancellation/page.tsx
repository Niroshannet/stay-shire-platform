'use client';
import Link from 'next/link';
import { ArrowLeft, Calendar, DollarSign, Clock } from 'lucide-react';

export default function CancellationPage() {
    const policies = [
        {
            name: 'Flexible',
            icon: Clock,
            refund: 'Full refund up to 24 hours before check-in',
            description: 'Get a full refund if you cancel at least 24 hours before check-in. After that, cancel before check-in and get a 50% refund.'
        },
        {
            name: 'Moderate',
            icon: Calendar,
            refund: 'Full refund up to 5 days before check-in',
            description: 'Get a full refund if you cancel at least 5 days before check-in. Cancel within 5 days and get a 50% refund.'
        },
        {
            name: 'Strict',
            icon: DollarSign,
            refund: 'Full refund up to 14 days before check-in',
            description: 'Get a full refund if you cancel at least 14 days before check-in. No refund for cancellations within 14 days.'
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Cancellation Policy</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Understand our cancellation policies and refund timelines.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Policy Types</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {policies.map((policy, index) => (
                        <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#059669] transition">
                            <policy.icon className="w-12 h-12 text-[#059669] mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{policy.name}</h3>
                            <p className="text-[#059669] font-semibold mb-4">{policy.refund}</p>
                            <p className="text-gray-600">{policy.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-2">Important Note</h3>
                    <p className="text-gray-700">
                        Each property has its own cancellation policy set by the host. Always check the specific policy before booking. Service fees may be non-refundable depending on the timing of your cancellation.
                    </p>
                </div>
            </div>
        </div>
    );
}
