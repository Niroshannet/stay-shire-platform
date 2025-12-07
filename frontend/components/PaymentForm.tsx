'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Lock, Calendar, Check } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export default function PaymentForm({ amount, onSuccess }: { amount: number; onSuccess: () => void }) {
    const [loading, setLoading] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simmons payment processing delay
        setTimeout(() => {
            setLoading(false);
            onSuccess();
        }, 2000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="glass p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold text-white">Payment Details</h3>
                    <div className="flex gap-2">
                        <div className="w-10 h-6 bg-white/10 rounded" />
                        <div className="w-10 h-6 bg-white/10 rounded" />
                    </div>
                </div>

                <div className="space-y-4">
                    <Input
                        label="Card Number"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                        maxLength={19}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Expiration"
                            placeholder="MM/YY"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            required
                            maxLength={5}
                        />
                        <Input
                            label="CVC"
                            placeholder="123"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            required
                            maxLength={3}
                        />
                    </div>
                </div>
            </div>

            <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-white mb-4">Billing Address</h3>
                <div className="space-y-4">
                    <Input label="Street Address" placeholder="123 Main St" required />
                    <div className="grid grid-cols-2 gap-4">
                        <Input label="City" placeholder="New York" required />
                        <Input label="Postal Code" placeholder="10001" required />
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <div className="flex justify-between items-center mb-6 text-lg font-bold text-white">
                    <span>Total to pay</span>
                    <span>${amount}</span>
                </div>

                <Button type="submit" className="w-full" isLoading={loading}>
                    Confirm and Pay
                </Button>

                <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-sm">
                    <Lock className="w-3 h-3" />
                    <span>Payments are secure and encrypted</span>
                </div>
            </div>
        </form>
    );
}
