import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
    variant?: 'primary' | 'glass' | 'outline';
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    isLoading = false,
    children,
    className = '',
    disabled,
    ...props
}) => {
    const baseClass = variant === 'primary'
        ? 'px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
        : variant === 'glass'
            ? 'glass px-6 py-3 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105'
            : 'border border-slate-600 px-6 py-3 rounded-xl font-semibold text-slate-300 hover:bg-white/10 transition-all duration-300';


    return (
        <motion.button
            className={`${baseClass} ${className} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={!disabled && !isLoading ? { scale: 1.05 } : {}}
            whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    <span>Loading...</span>
                </div>
            ) : (
                children
            )}
        </motion.button>
    );
};
