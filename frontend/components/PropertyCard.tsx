'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart } from 'lucide-react';
import { useState } from 'react';

interface PropertyCardProps {
    id: string;
    title: string;
    dates: string;
    hostInfo: string;
    priceText: string;
    rating: number;
    imageUrl: string;
    isFavorite?: boolean;
    isGuestFavorite?: boolean;
}

export function PropertyCard({
    id,
    title,
    dates,
    hostInfo,
    priceText,
    rating,
    imageUrl,
    isFavorite = false,
    isGuestFavorite = false,
}: PropertyCardProps) {
    const [favorite, setFavorite] = useState(isFavorite);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setFavorite(!favorite);
    };

    return (
        <Link href={`/properties/${id}`} className="group block w-full cursor-pointer">
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-200">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Guest Favourite Badge */}
                {isGuestFavorite && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm z-10">
                        <span className="text-xs font-bold text-gray-900">Guest favourite</span>
                    </div>
                )}

                {/* Heart Icon */}
                <button
                    onClick={handleFavoriteClick}
                    className="absolute top-3 right-3 p-2 transition-transform hover:scale-110 z-10"
                >
                    <Heart
                        className={`${favorite ? 'fill-[#059669] stroke-[#059669]' : 'fill-black/50 stroke-white'} stroke-[2px]`}
                        size={24}
                    />
                </button>
            </div>

            <div className="mt-2 flex flex-col gap-0.5">
                <h3 className="font-medium text-[#222222] text-[13px] leading-[17px] truncate">{title}</h3>
                <p className="text-[#717171] text-[13px] leading-[17px] truncate">{dates} · {hostInfo}</p>
                <div className="flex items-center gap-1 text-[13px] leading-[17px] text-[#222222]">
                    <span className="font-medium underline decoration-transparent group-hover:decoration-gray-900 transition-colors">
                        {priceText}
                    </span>
                    <span className="text-[#222222]">★ {rating.toFixed(2)}</span>
                </div>
            </div>
        </Link>
    );
}
