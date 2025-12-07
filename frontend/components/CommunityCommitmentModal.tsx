'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Castle, ChevronRight } from 'lucide-react';

interface CommunityCommitmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAgree: () => void;
}

export default function CommunityCommitmentModal({ isOpen, onClose, onAgree }: CommunityCommitmentModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4"
                    >
                        <div className="bg-white rounded-2xl w-full max-w-[568px] flex flex-col pointer-events-auto shadow-2xl overflow-hidden relative max-h-[90vh] overflow-y-auto">

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                {/* Logo */}
                                <div className="mb-6">
                                    <div className="relative flex items-center justify-center w-10 h-10 bg-[#059669] rounded-lg shadow-sm">
                                        <Castle className="w-6 h-6 text-white" />
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#34D399] rounded-full border-2 border-white"></div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Our community commitment</span>
                                </div>

                                <h2 className="text-[32px] font-bold text-[#222222] leading-none tracking-tight mb-6">
                                    Stay shire is a community where anyone can belong
                                </h2>

                                <p className="text-[16px] text-[#222222] mb-6 font-light leading-6">
                                    To ensure this, we're asking you to commit to the following:
                                </p>

                                <p className="text-[16px] text-[#222222] mb-6 leading-6 font-light">
                                    I agree to treat everyone in the Stay shire community – regardless of their race, religion, national origin, ethnicity, skin colour, disability, sex, gender identity, sexual orientation or age – with respect, and without judgement or bias.
                                </p>

                                <div className="mb-8">
                                    <button className="text-[#222222] font-semibold underline flex items-center gap-1 hover:text-black">
                                        Learn more <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={onAgree}
                                        className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-lg py-3.5 rounded-lg transition-colors shadow-sm"
                                    >
                                        Agree and continue
                                    </button>

                                    <button
                                        onClick={onClose}
                                        className="w-full bg-white border border-black hover:bg-gray-50 text-[#222222] font-bold text-lg py-3.5 rounded-lg transition-colors"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
