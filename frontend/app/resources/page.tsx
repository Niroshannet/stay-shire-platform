'use client';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Video, Download } from 'lucide-react';

export default function ResourcesPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Host Resources Hub</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Everything you need to succeed as a host. Guides, templates, and best practices.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                        <BookOpen className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Hosting Guides</h3>
                        <p className="text-gray-600">Step-by-step tutorials and best practices</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Video className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                        <p className="text-gray-600">Learn from experienced hosts</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Download className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Templates</h3>
                        <p className="text-gray-600">Downloadable checklists and forms</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
