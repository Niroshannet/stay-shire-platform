'use client';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertCircle } from 'lucide-react';

export default function TermsPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Last updated: December 2025
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Agreement to Terms</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        By accessing and using Stay Shire, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this platform.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-12">
                        <div className="bg-gray-50 rounded-xl p-6 text-center">
                            <FileText className="w-10 h-10 text-[#059669] mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">User Agreement</h3>
                            <p className="text-gray-600 text-sm">Rights and responsibilities</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 text-center">
                            <Scale className="w-10 h-10 text-[#059669] mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Legal Terms</h3>
                            <p className="text-gray-600 text-sm">Binding agreements</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6 text-center">
                            <AlertCircle className="w-10 h-10 text-[#059669] mx-auto mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Liability</h3>
                            <p className="text-gray-600 text-sm">Limitations and disclaimers</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                        <li>Provide accurate and truthful information</li>
                        <li>Maintain the security of your account</li>
                        <li>Comply with all applicable laws and regulations</li>
                        <li>Respect other users and their property</li>
                        <li>Pay all fees and charges on time</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Host Obligations</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                        <li>Accurately describe your property and amenities</li>
                        <li>Honor confirmed reservations</li>
                        <li>Maintain property safety and cleanliness standards</li>
                        <li>Respond to guest inquiries promptly</li>
                        <li>Comply with local hosting regulations</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation and Refunds</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Cancellation policies vary by property. Guests should review the specific cancellation policy before booking. Hosts must honor their stated cancellation policies.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        Stay Shire acts as a platform connecting hosts and guests. We are not responsible for the actions of users or the condition of properties. Our liability is limited to the maximum extent permitted by law.
                    </p>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl my-8">
                        <h3 className="font-bold text-gray-900 mb-2">Important Notice</h3>
                        <p className="text-gray-700">
                            These terms may be updated periodically. Continued use of the platform constitutes acceptance of updated terms.
                        </p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-[#059669] p-6 rounded-r-xl my-8">
                        <h3 className="font-bold text-gray-900 mb-2">Questions About Terms?</h3>
                        <p className="text-gray-700">
                            Contact our legal team at legal@stayshire.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
