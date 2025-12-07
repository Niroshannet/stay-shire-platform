'use client';
import Link from 'next/link';
import { ArrowLeft, Newspaper, Download, Mail } from 'lucide-react';

export default function NewsPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Press Room</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Latest news, press releases, and media resources.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Newspaper className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Press Releases</h3>
                        <p className="text-gray-600">Latest company announcements</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Download className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Media Kit</h3>
                        <p className="text-gray-600">Logos, images, and brand assets</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Mail className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Media Contact</h3>
                        <p className="text-gray-600">press@stayshire.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
