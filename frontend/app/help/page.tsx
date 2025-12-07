'use client';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const faqs = [
        {
            question: 'How do I book a property?',
            answer: 'Browse our listings, select your dates, review the details, and click "Reserve". You\'ll receive instant confirmation once payment is processed.'
        },
        {
            question: 'What is the cancellation policy?',
            answer: 'Cancellation policies vary by property. Check the specific listing for details. Most hosts offer flexible, moderate, or strict cancellation options.'
        },
        {
            question: 'How do I contact my host?',
            answer: 'Once your booking is confirmed, you can message your host directly through the Messages section in your account.'
        },
        {
            question: 'Is my payment secure?',
            answer: 'Yes! We use industry-standard encryption and never share your payment details with hosts. Payments are processed securely through our platform.'
        },
        {
            question: 'Can I modify my reservation?',
            answer: 'You can request changes through your trip dashboard. The host must approve any modifications to dates or guest count.'
        },
        {
            question: 'What if I have an issue during my stay?',
            answer: 'Contact your host first. If unresolved, our 24/7 support team is available to help through the Help Center or emergency hotline.'
        }
    ];

    const contactOptions = [
        {
            icon: Phone,
            title: '24/7 Phone Support',
            description: 'Call us anytime',
            action: '+1 (800) 123-4567',
            link: 'tel:+18001234567'
        },
        {
            icon: Mail,
            title: 'Email Support',
            description: 'Response within 24 hours',
            action: 'support@stayshire.com',
            link: 'mailto:support@stayshire.com'
        },
        {
            icon: HelpCircle,
            title: 'Live Chat',
            description: 'Chat with our team',
            action: 'Start Chat',
            link: '#'
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-20">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-[#059669] transition">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#059669] to-[#047857] text-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Help & Support Center</h1>
                    <p className="text-xl text-green-50 max-w-2xl">
                        We're here to help you 24/7. Find answers, contact support, or explore our resources.
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-7xl mx-auto px-4 -mt-8">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                    <input
                        type="text"
                        placeholder="Search for help..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-[#059669] focus:outline-none text-lg"
                    />
                </div>
            </div>

            {/* Contact Options */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {contactOptions.map((option, index) => (
                        <a
                            key={index}
                            href={option.link}
                            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition group"
                        >
                            <option.icon className="w-12 h-12 text-[#059669] mb-4 group-hover:scale-110 transition" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                            <p className="text-gray-600 mb-3">{option.description}</p>
                            <p className="text-[#059669] font-semibold">{option.action}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/* FAQs */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <details
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 group"
                        >
                            <summary className="font-semibold text-lg text-gray-900 cursor-pointer list-none flex justify-between items-center">
                                {faq.question}
                                <span className="text-[#059669] group-open:rotate-180 transition">▼</span>
                            </summary>
                            <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                        </details>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our support team is available 24/7 to assist you with any questions or concerns.
                    </p>
                    <Link
                        href="/concerns"
                        className="inline-block bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-xl font-semibold transition"
                    >
                        Submit a Support Ticket
                    </Link>
                </div>
            </div>
        </div>
    );
}
