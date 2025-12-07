'use client';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_REVIEWS = [
    {
        id: 1,
        user: {
            name: "Alice Johnson",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
        },
        date: "February 2024",
        rating: 5,
        text: "Absolutely stunning property! The view is breathtaking and the amenities are top-notch. Highly recommend for a relaxing getaway.",
    },
    {
        id: 2,
        user: {
            name: "David Smith",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80",
        },
        date: "January 2024",
        rating: 4,
        text: "Great location and very clean. The host was responsive, but the pool heating took a while to warm up.",
    }
];

export default function ReviewsList() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_REVIEWS.map((review, idx) => (
                <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass p-6 rounded-2xl"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src={review.user.image}
                            alt={review.user.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                        />
                        <div>
                            <h4 className="font-bold text-white">{review.user.name}</h4>
                            <p className="text-sm text-slate-400">{review.date}</p>
                        </div>
                        <div className="ml-auto flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-bold text-white">{review.rating}</span>
                        </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                        {review.text}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
