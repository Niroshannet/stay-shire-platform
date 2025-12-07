import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import apiClient from '@/lib/api';

interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    isHost?: boolean;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => void;
    setUser: (user: User) => void;
    setToken: (token: string) => void;
    checkAuth: () => Promise<void>;
}

interface RegisterData {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: { id: 'mock-id', email: 'test@example.com', firstName: 'User', lastName: 'Name' },
            token: 'mock-token',
            isAuthenticated: true,
            isLoading: false,

            login: async (email: string, password: string) => {
                set({ isLoading: true });
                try {
                    const response = await apiClient.post('/api/auth/login', {
                        email,
                        password,
                    });

                    const { user, accessToken } = response.data;

                    localStorage.setItem('token', accessToken);
                    set({
                        user,
                        token: accessToken,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    set({ isLoading: false });
                    throw error;
                }
            },

            register: async (data: RegisterData) => {
                set({ isLoading: true });
                try {
                    const response = await apiClient.post('/api/auth/register', data);

                    const { user, accessToken } = response.data;

                    localStorage.setItem('token', accessToken);
                    set({
                        user,
                        token: accessToken,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    set({ isLoading: false });
                    throw error;
                }
            },

            logout: () => {
                localStorage.removeItem('token');
                set({
                    user: null,
                    token: null,
                    isAuthenticated: false,
                });
            },

            setUser: (user: User) => {
                set({ user });
            },

            setToken: (token: string) => {
                localStorage.setItem('token', token);
                set({ token, isAuthenticated: true });
            },

            checkAuth: async () => {
                set({ isLoading: true });
                try {
                    const token = localStorage.getItem('token');
                    if (!token) {
                        set({ isLoading: false, isAuthenticated: false });
                        return;
                    }

                    // Fetch user profile with the token
                    const response = await apiClient.get('/api/auth/profile', {
                        headers: { Authorization: `Bearer ${token}` }
                    });

                    set({
                        user: response.data,
                        token,
                        isAuthenticated: true,
                        isLoading: false,
                    });
                } catch (error) {
                    localStorage.removeItem('token');
                    set({
                        user: null,
                        token: null,
                        isAuthenticated: false,
                        isLoading: false,
                    });
                }
            },
        }),
        {
            name: 'auth-storage',
            version: 1,
            partialize: (state) => ({
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
            }),
            migrate: (persistedState: any, version: number) => {
                if (version === 0) {
                    // Reset to default authenticated state if version is old
                    return {
                        user: { id: 'mock-id', email: 'test@example.com', firstName: 'User', lastName: 'Name' },
                        token: 'mock-token',
                        isAuthenticated: true,
                        isLoading: false,
                    } as AuthState;
                }
                return persistedState as AuthState;
            },
        }
    )
);
