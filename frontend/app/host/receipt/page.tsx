'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function ReceiptPage() {
    const router = useRouter();

    const handlePublish = () => {
        // Mock publish action
        toast.success("Listing published successfully!");
        setTimeout(() => {
            router.push('/');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="px-6 md:px-12 py-6 flex items-center justify-end">
                <Link href="/host/get-started" className="px-4 py-2 border border-black/10 rounded-full text-sm font-semibold hover:bg-black/5 transition">
                    Save & exit
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 pb-32 pt-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Column */}
                <div className="space-y-8">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[32px] md:text-[48px] font-semibold text-[#222222] leading-tight mb-4"
                        >
                            Review your listing
                        </motion.h1>
                        <p className="text-[#717171] text-lg">
                            Here's what we'll show to guests. Make sure everything looks good.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 -ml-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 rounded-full bg-white border border-[#DDDDDD] flex items-center justify-center shrink-0 shadow-sm group-hover:border-black transition-colors">
                                {/* SVG for document or calendar */}
                                <span className="font-semibold text-lg text-[#222222]">1</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-[#222222] text-lg mb-1">Cancellation policy</h3>
                                <p className="text-[#717171]">Standard policy: Guests can cancel for a full refund up to 7 days before check-in.</p>
                                <button className="mt-2 text-[#222222] font-semibold underline decoration-2 hover:text-black">Edit details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Card */}
                <div className="flex justify-center md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-full max-w-[320px] bg-white rounded-2xl border-0 shadow-none overflow-hidden"
                    >
                        {/* Card Image */}
                        <div className="relative aspect-[20/19] rounded-xl overflow-hidden bg-gray-200 mb-3">
                            <img
                                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80"
                                alt="Room in Tottenham"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-semibold shadow-sm text-[#222222]">
                                Guest favourite
                            </div>
                            <button className="absolute top-3 right-3 p-2 rounded-full hover:bg-black/5 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" className="block h-6 w-6 stroke-white stroke-[2px] fill-[rgba(0,0,0,0.5)] overflow-visible"><path d="M16 28c-2.801 0-5.343-4.275-8.509-9.681-4.596-7.855-2.995-12.974 0-15.891 7.715-7.516 16-4.298 16-.364 0 3.934-8.285 7.152-16-14.668-3.096-2.916 2.917-8.035 7.822-12.891 15.891-3.114 4.965-5.38 8.879-8.509 9.681z"></path></svg>
                            </button>
                        </div>

                        {/* Card Content */}
                        <div className="space-y-1">
                            <div className="flex justify-between items-start">
                                <h3 className="font-semibold text-[#222222] text-[16px] leading-[20px]">Room in Tottenham</h3>
                            </div>
                            <p className="text-[15px] text-[#717171]">9–11 Jan · Individual host</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="font-semibold text-[#222222] text-[15px]">£82</span>
                                <span className="text-[#222222] text-[15px]">for 2 nights</span>
                                <span className="flex items-center gap-1 text-[15px] text-[#222222] ml-auto">
                                    <Star className="w-3.5 h-3.5 fill-black text-black" />
                                    <span>4.97</span>
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
                {/* Progress Bar - 100% */}
                <div className="w-full h-1 bg-gray-100">
                    <div className="h-full bg-[#222222] w-full transition-all duration-500"></div>
                </div>

                <div className="px-6 md:px-12 py-4 flex items-center justify-between max-w-7xl mx-auto">
                    <Link
                        href="/host/price"
                        className="font-semibold underline text-[#222222] hover:text-gray-600 transition"
                    >
                        Back
                    </Link>

                    <button
                        onClick={handlePublish}
                        className="bg-[#059669] hover:bg-[#047857] px-8 py-3 rounded-lg font-semibold text-white transition-all transform active:scale-95 text-lg shadow-md"
                        style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                    >
                        Publish your listing
                    </button>
                </div>
            </footer>
        </div>
    );
}
