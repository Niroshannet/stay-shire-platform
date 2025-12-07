'use client';
import Link from 'next/link';
import { ArrowLeft, TrendingUp, FileText, Calendar } from 'lucide-react';

export default function InvestorsPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Investor Relations</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Financial information and shareholder resources.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                        <TrendingUp className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Financial Reports</h3>
                        <p className="text-gray-600">Quarterly and annual reports</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <FileText className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">SEC Filings</h3>
                        <p className="text-gray-600">Regulatory documents</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                        <Calendar className="w-12 h-12 text-[#059669] mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Events</h3>
                        <p className="text-gray-600">Earnings calls and presentations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
