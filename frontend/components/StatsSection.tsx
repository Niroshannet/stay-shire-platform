'use client';

import { TrendingUp, Users, MapPin, Award } from 'lucide-react';

const stats = [
    {
        icon: MapPin,
        value: '500+',
        label: 'Properties Listed',
        color: 'text-green-600'
    },
    {
        icon: Users,
        value: '10,000+',
        label: 'Happy Guests',
        color: 'text-blue-600'
    },
    {
        icon: TrendingUp,
        value: '99%',
        label: 'Satisfaction Rate',
        color: 'text-purple-600'
    },
    {
        icon: Award,
        value: '24/7',
        label: 'Customer Support',
        color: 'text-orange-600'
    }
];

export default function StatsSection() {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Trusted by Thousands Worldwide
                    </h2>
                    <p className="text-lg text-gray-600">
                        Join our growing community of hosts and guests
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center transform hover:scale-105 transition-transform duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-white rounded-2xl shadow-md">
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
