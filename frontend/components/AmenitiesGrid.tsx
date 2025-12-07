'use client';

import { Wifi, Car, Utensils, Tv, Wind, Waves, Coffee, Dumbbell, PawPrint, Lock, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = {
    wifi: Wifi,
    parking: Car,
    kitchen: Utensils,
    tv: Tv,
    ac: Wind,
    pool: Waves,
    coffee: Coffee,
    gym: Dumbbell,
    pets: PawPrint,
    security: Lock,
    alarm: Flame
};

interface Amenity {
    name: string;
    icon: string;
}

export default function AmenitiesGrid({ amenities }: { amenities: Amenity[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {amenities.map((amenity, index) => {
                const Icon = iconMap[amenity.icon] || Wifi;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-4"
                    >
                        <Icon className="w-6 h-6 text-[#222222] stroke-[1.5]" />
                        <span className="text-[#222222] text-[16px] font-normal">{amenity.name}</span>
                    </motion.div>
                );
            })}
        </div>
    );
}
