'use client';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Cookie } from 'lucide-react';

export default function PrivacyPage() {
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        Last updated: December 2025
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Matters</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        At Stay Shire, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 my-12">
                        <div className="bg-gray-50 rounded-xl p-6">
                            <Shield className="w-10 h-10 text-[#059669] mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Data Protection</h3>
                            <p className="text-gray-600 text-sm">Industry-standard encryption and security measures</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <Eye className="w-10 h-10 text-[#059669] mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                            <p className="text-gray-600 text-sm">Clear information about data usage</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <Lock className="w-10 h-10 text-[#059669] mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Your Control</h3>
                            <p className="text-gray-600 text-sm">Manage your privacy settings anytime</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                            <Cookie className="w-10 h-10 text-[#059669] mb-4" />
                            <h3 className="font-semibold text-lg mb-2">Cookie Policy</h3>
                            <p className="text-gray-600 text-sm">Transparent cookie usage and preferences</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                        <li>Account information (name, email, phone number)</li>
                        <li>Payment information (processed securely by third-party providers)</li>
                        <li>Property and booking details</li>
                        <li>Communication and messages</li>
                        <li>Device and usage information</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Data</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                        <li>Facilitate bookings and transactions</li>
                        <li>Improve our services and user experience</li>
                        <li>Send important updates and notifications</li>
                        <li>Prevent fraud and ensure platform security</li>
                        <li>Comply with legal obligations</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        You have the right to access, correct, or delete your personal information. You can also object to processing, request data portability, and withdraw consent at any time.
                    </p>

                    <div className="bg-green-50 border-l-4 border-[#059669] p-6 rounded-r-xl my-8">
                        <h3 className="font-bold text-gray-900 mb-2">Questions About Privacy?</h3>
                        <p className="text-gray-700">
                            Contact our Data Protection Officer at privacy@stayshire.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
