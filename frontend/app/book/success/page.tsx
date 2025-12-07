'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Check, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function BookingSuccessPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <div className="glass max-w-lg w-full p-8 rounded-3xl text-center relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                    <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
                </div>

                <div className="relative z-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                    >
                        <Check className="w-12 h-12 text-white" strokeWidth={4} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold text-white mb-2"
                    >
                        Booking Confirmed!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-slate-300 mb-8"
                    >
                        Your trip to Malibu is all set. We've sent a confirmation email with all the details to your inbox.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-3"
                    >
                        <Button onClick={() => router.push('/trips')} className="w-full">
                            View My Trips
                        </Button>
                        <Button onClick={() => router.push('/')} variant="glass" className="w-full">
                            Back to Home
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
