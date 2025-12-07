'use client';
import Link from 'next/link';
import { ArrowLeft, Users, Heart, Scale } from 'lucide-react';

export default function DiscriminationPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Non-Discrimination Policy</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        We're committed to fostering an inclusive community where everyone belongs.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Stay Shire is committed to building a community where everyone is welcome. We do not tolerate discrimination based on race, religion, national origin, disability, sex, gender identity, sexual orientation, or age.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-12">
                        <div className="text-center">
                            <Users className="w-12 h-12 text-[#059669] mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Inclusive Community</h3>
                            <p className="text-gray-600 text-sm">Everyone deserves respect and equal treatment</p>
                        </div>
                        <div className="text-center">
                            <Heart className="w-12 h-12 text-[#059669] mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Zero Tolerance</h3>
                            <p className="text-gray-600 text-sm">We take swift action against discrimination</p>
                        </div>
                        <div className="text-center">
                            <Scale className="w-12 h-12 text-[#059669] mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Fair Treatment</h3>
                            <p className="text-gray-600 text-sm">Equal opportunities for all members</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Reporting Discrimination</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        If you experience or witness discrimination, please report it immediately. We investigate all reports seriously and take appropriate action, which may include account suspension or permanent removal from the platform.
                    </p>

                    <div className="bg-green-50 border-l-4 border-[#059669] p-6 rounded-r-xl my-8">
                        <h3 className="font-bold text-gray-900 mb-2">How to Report</h3>
                        <p className="text-gray-700">
                            Contact our Trust & Safety team through the Report a Concern page or email discrimination@stayshire.com. All reports are confidential.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Report Discrimination</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Help us maintain a safe and inclusive community for everyone.
                    </p>
                    <Link
                        href="/concerns"
                        className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl font-semibold transition"
                    >
                        File a Report
                    </Link>
                </div>
            </div>
        </div>
    );
}
