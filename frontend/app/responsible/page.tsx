'use client';
import Link from 'next/link';
import { ArrowLeft, Leaf, Recycle, Heart } from 'lucide-react';

export default function ResponsiblePage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Responsible Hosting</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Host sustainably and be a good neighbor in your community.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Leaf className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                        <p className="text-gray-600">Eco-friendly hosting practices</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Heart className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Community Relations</h3>
                        <p className="text-gray-600">Be a respectful neighbor</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Recycle className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Local Regulations</h3>
                        <p className="text-gray-600">Stay compliant with local laws</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
