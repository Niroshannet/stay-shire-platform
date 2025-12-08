'use client';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { User, Menu, Castle, LogOut, HelpCircle, Heart, MessageSquare, Settings, Globe, Home } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar';
import BecomeHostModal from './BecomeHostModal';
import CommunityCommitmentModal from './CommunityCommitmentModal';

function Header() {
    const { user, isAuthenticated, logout } = useAuthStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHostModalOpen, setIsHostModalOpen] = useState(false);
    const [isCommitmentModalOpen, setIsCommitmentModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Prevent hydration mismatch by rendering default state until mounted,
    // or handle it by showing a loader/placeholder if needed. 
    // Here we will use the `mounted` check for the auth-dependent parts.

    return (
        <header className="fixed w-full top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-[1920px] mx-auto px-4 xl:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo - Airbnb Red */}
                    {/* Logo - Stay shire (Glass Green) */}
                    <Link href="/" className="flex items-center gap-2 min-w-[140px] z-50">
                        <div className="relative flex items-center justify-center w-10 h-10 bg-[#059669] rounded-lg shadow-sm">
                            <Castle className="w-6 h-6 text-white bg-clip-text" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#34D399] rounded-full border-2 border-white"></div>
                        </div>
                        <span className="text-[#059669] font-bold text-xl tracking-tight hidden md:block" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                            Stay shire
                        </span>
                    </Link>

                    {/* Navigation - Centered (Only visible on large screens when not searching) */}
                    <div className="hidden lg:flex items-center justify-center gap-6 absolute left-1/2 transform -translate-x-1/2 top-4">
                        <div className="font-semibold text-gray-900 cursor-pointer">Homes</div>
                        <div className="font-normal text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer transition">Experiences</div>
                        <div className="font-normal text-gray-500 hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer transition">Services</div>
                    </div>

                    {/* User Menu - Right Aligned */}
                    <div className="flex items-center gap-2 min-w-[140px] justify-end z-50">
                        {isAuthenticated ? (
                            <Link href="/host/dashboard" className="hidden md:block text-sm font-semibold text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition">
                                Switch to hosting
                            </Link>
                        ) : (
                            <button
                                onClick={() => setIsHostModalOpen(true)}
                                className="hidden md:block text-sm font-semibold text-gray-900 px-4 py-2 rounded-full hover:bg-green-50 hover:text-green-700 transition-all duration-300"
                            >
                                Start Earning Today
                            </button>
                        )}

                        {/* Remove Globe Icon */}

                        {/* Standalone Avatar Circle (Authenticated Only) */}
                        {isAuthenticated && (
                            <div className="hidden md:flex w-10 h-10 bg-[#222222] rounded-full text-white items-center justify-center text-sm font-bold shadow-sm">
                                {user?.firstName ? user.firstName[0].toUpperCase() : 'S'}
                            </div>
                        )}

                        <div className="relative ml-1" ref={menuRef}>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`flex items-center justify-center transition cursor-pointer relative ${isAuthenticated
                                    ? 'w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 border-none' // Circle for Auth
                                    : 'gap-3 border border-gray-300 rounded-full p-1 pl-3 bg-white hover:shadow-md' // Pill for Unauth
                                    }`}
                            >
                                {isAuthenticated ? (
                                    <>
                                        <Menu className="w-5 h-5 text-gray-900 stroke-[2px]" />
                                        <div className="absolute top-0 right-0 w-3 h-3 bg-[#059669] border-2 border-white rounded-full"></div>
                                    </>
                                ) : (
                                    <>
                                        <Menu className="w-4 h-4 text-gray-500 stroke-[3px]" />
                                        <div className="bg-[#717171] text-white rounded-full p-1 w-8 h-8 flex items-center justify-center">
                                            <User className="w-4 h-4 fill-current" />
                                        </div>
                                    </>
                                )}
                            </button>

                            <AnimatePresence>
                                {isMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                        className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2 z-[100]"
                                    >
                                        {mounted && isAuthenticated ? (
                                            <>
                                                <div className="font-semibold text-[#222222]">
                                                    <Link href="/wishlists" className="px-4 py-3 hover:bg-gray-50 transition flex items-center gap-4 text-[14px]">
                                                        <Heart className="w-5 h-5 stroke-[1.5px]" />
                                                        Wishlists
                                                    </Link>
                                                    <Link href="/trips" className="px-4 py-3 hover:bg-gray-50 transition flex items-center gap-4 text-[14px]">
                                                        {/* Using Castle as Airbnb logo proxy, or generic Trip icon */}
                                                        <div className="opacity-80"><Castle className="w-5 h-5 stroke-[1.5px]" /></div>
                                                        Trips
                                                    </Link>
                                                    <Link href="/messages" className="px-4 py-3 hover:bg-gray-50 transition flex items-center gap-4 text-[14px] justify-between">
                                                        <div className="flex items-center gap-4">
                                                            <MessageSquare className="w-5 h-5 stroke-[1.5px]" />
                                                            Messages
                                                        </div>
                                                        {/* Message Badge from screenshot */}
                                                        <div className="w-5 h-5 bg-[#059669] rounded-full text-white text-[10px] font-bold flex items-center justify-center">1</div>
                                                    </Link>
                                                    <Link href="/account" className="px-4 py-3 hover:bg-gray-50 transition flex items-center gap-4 text-[14px]">
                                                        <User className="w-5 h-5 stroke-[1.5px]" />
                                                        Profile
                                                    </Link>
                                                </div>

                                                <hr className="border-gray-100 my-1" />

                                                <div className="text-[#222222]">
                                                    <Link href="/account-settings" className="px-4 py-3 hover:bg-gray-50 transition flex items-center gap-4 text-[14px]">
                                                        <Settings className="w-5 h-5 stroke-[1.5px]" />
                                                        Account settings
                                                    </Link>
                                                    <button className="w-full text-left px-4 py-3 hover:bg-gray-50 transition flex items-center gap-4 text-[14px]">
                                                        <Globe className="w-5 h-5 stroke-[1.5px]" />
                                                        Languages & currency
                                                    </button>
                                                    <Link href="/help" className="px-4 py-3 hover:bg-gray-50 transition flex items-center gap-4 text-[14px]">
                                                        <HelpCircle className="w-5 h-5 stroke-[1.5px]" />
                                                        Help Centre
                                                    </Link>
                                                </div>

                                                <hr className="border-gray-100 my-1" />

                                                <Link href="/host/get-started" className="block px-4 py-3 hover:bg-gray-50 transition">
                                                    <div className="flex justify-between items-start gap-3">
                                                        <div className="flex gap-3 flex-1">
                                                            <Home className="w-5 h-5 stroke-[1.5px] text-[#222222] mt-0.5 flex-shrink-0" />
                                                            <div>
                                                                <div className="text-[#222222] font-semibold text-[14px]">Become a host</div>
                                                                <div className="text-[#717171] text-[13px] font-light leading-4 mt-1">
                                                                    It&apos;s easy to start hosting and<br />earn extra income.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="relative w-12 h-12 flex-shrink-0 bg-green-50 rounded-lg flex items-center justify-center">
                                                            <svg
                                                                width="32"
                                                                height="32"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                                                                    stroke="#059669"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M9 22V12H15V22"
                                                                    stroke="#059669"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <hr className="border-gray-100 my-1" />

                                                <Link href="/refer" className="block px-4 py-3 text-[#222222] text-[14px] hover:bg-gray-50 transition">
                                                    Refer a host
                                                </Link>
                                                <Link href="/co-host" className="block px-4 py-3 text-[#222222] text-[14px] hover:bg-gray-50 transition">
                                                    Find a co-host
                                                </Link>
                                                <Link href="/gift" className="block px-4 py-3 text-[#222222] text-[14px] hover:bg-gray-50 transition">
                                                    Gift cards
                                                </Link>

                                                <hr className="border-gray-100 my-1" />

                                                <button
                                                    onClick={() => {
                                                        logout();
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="w-full text-left px-4 py-3 text-[#222222] text-[14px] hover:bg-gray-50 transition"
                                                >
                                                    Log out
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <Link href="/help" className="flex items-center gap-3 px-4 py-3 text-[#222222] text-[14px] hover:bg-gray-50 transition">
                                                    <HelpCircle className="w-5 h-5 stroke-[1.5px]" />
                                                    <span className="font-light">Help Centre</span>
                                                </Link>
                                                <hr className="border-gray-100 my-1" />

                                                <button
                                                    onClick={() => {
                                                        setIsHostModalOpen(true);
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="block w-full text-left px-4 py-3 hover:bg-gray-50 transition"
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <div className="text-[#222222] font-semibold text-[14px]">Become a host</div>
                                                            <div className="text-[#717171] text-[13px] font-light leading-4 mt-1">
                                                                It&apos;s easy to start hosting and<br />earn extra income.
                                                            </div>
                                                        </div>
                                                        <div className="relative w-10 h-10">
                                                            <img
                                                                src="https://a0.muscache.com/pictures/airbnb-platform/feed/2a095f32-e22a-4a6c-a494-b265695272a2.jpg"
                                                                alt="Host"
                                                                className="object-contain w-full h-full"
                                                                onError={(e) => {
                                                                    e.currentTarget.style.display = 'none';
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </button>

                                                <Link href="/refer-a-host" className="block px-4 py-3 text-[#222222] text-[14px] font-light hover:bg-gray-50 transition">
                                                    Refer a host
                                                </Link>
                                                <Link href="/co-host" className="block px-4 py-3 text-[#222222] text-[14px] font-light hover:bg-gray-50 transition">
                                                    Find a co-host
                                                </Link>
                                                <Link href="/gift-cards" className="block px-4 py-3 text-[#222222] text-[14px] font-light hover:bg-gray-50 transition">
                                                    Gift cards
                                                </Link>
                                                <hr className="border-gray-100 my-1" />

                                                <button
                                                    className="w-full text-left px-4 py-3 text-[#222222] text-[14px] font-light hover:bg-gray-50 transition"
                                                    onClick={() => {
                                                        setIsMenuOpen(false);
                                                        setIsCommitmentModalOpen(true);
                                                    }}
                                                >
                                                    Log in or sign up
                                                </button>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center pb-4">
                    <SearchBar />
                </div>
            </div>
            <BecomeHostModal isOpen={isHostModalOpen} onClose={() => setIsHostModalOpen(false)} />
            <CommunityCommitmentModal
                isOpen={isCommitmentModalOpen}
                onClose={() => setIsCommitmentModalOpen(false)}
                onAgree={() => {
                    setIsCommitmentModalOpen(false); // Proceed logic would go here
                }}
            />
        </header>
    );
}

export default Header;
