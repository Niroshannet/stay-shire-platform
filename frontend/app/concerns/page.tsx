'use client';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, FileText, Send } from 'lucide-react';
import { useState } from 'react';

export default function ConcernsPage() {
    const [formData, setFormData] = useState({
        category: '',
        description: '',
        email: ''
    });

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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Report a Concern</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Help us maintain a safe and trustworthy community by reporting issues.
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-12">
                <form className="bg-white border border-gray-200 rounded-xl p-8">
                    <div className="mb-6">
                        <label className="block text-gray-900 font-semibold mb-2">Concern Category</label>
                        <select
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        >
                            <option value="">Select a category</option>
                            <option value="safety">Safety Issue</option>
                            <option value="discrimination">Discrimination</option>
                            <option value="property">Property Issue</option>
                            <option value="payment">Payment Problem</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-900 font-semibold mb-2">Your Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-900 font-semibold mb-2">Description</label>
                        <textarea
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#059669] focus:outline-none"
                            placeholder="Please provide details about your concern..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#059669] hover:bg-[#047857] text-white px-6 py-4 rounded-xl font-semibold transition flex items-center justify-center gap-2"
                    >
                        <Send className="w-5 h-5" />
                        Submit Report
                    </button>
                </form>

                <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                    <h3 className="font-bold text-gray-900 mb-2">What Happens Next?</h3>
                    <p className="text-gray-700">
                        Our Trust & Safety team will review your report within 24 hours. We take all concerns seriously and will investigate thoroughly. You'll receive updates via email.
                    </p>
                </div>
            </div>
        </div>
    );
}
