'use client';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Users, TrendingUp } from 'lucide-react';

export default function CommunityPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Host Community Forum</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Connect with fellow hosts, share experiences, and get advice.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                        <MessageCircle className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Ask Questions</h3>
                        <p className="text-gray-600">Get answers from experienced hosts</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Users className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Share Tips</h3>
                        <p className="text-gray-600">Learn from the community</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <TrendingUp className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                        <p className="text-gray-600">Latest hosting trends and news</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Community</h2>
                    <Link
                        href="/host/get-started"
                        className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl font-semibold transition"
                    >
                        Become a Member
                    </Link>
                </div>
            </div>
        </div>
    );
}
