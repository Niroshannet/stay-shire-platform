'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import toast from 'react-hot-toast';

function SuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { setToken, checkAuth } = useAuthStore();

    useEffect(() => {
        const token = searchParams.get('token');
        if (token) {
            setToken(token);
            checkAuth(); // Fetch user profile
            toast.success('Successfully logged in!');
            router.push('/');
        } else {
            toast.error('Login failed. No token received.');
            router.push('/login');
        }
    }, [searchParams, setToken, router, checkAuth]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <h2 className="text-xl font-semibold text-white">Completing login...</h2>
            </div>
        </div>
    );
}

export default function AuthSuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SuccessContent />
        </Suspense>
    );
}
