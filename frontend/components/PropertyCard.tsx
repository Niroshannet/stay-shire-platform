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
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 170px, 190px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA//2Q=="
                />

                {/* Guest Favourite Badge */}
                {isGuestFavorite && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md z-10 transform group-hover:scale-105 transition-transform">
                        <span className="text-xs font-bold text-gray-900">Guest favourite</span>
                    </div>
                )}

                {/* Heart Icon */}
                <button
                    onClick={handleFavoriteClick}
                    className="absolute top-3 right-3 p-2 transition-all hover:scale-125 active:scale-95 z-10 group/heart"
                    aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                >
                    <Heart
                        className={`transition-all duration-300 ${favorite
                                ? 'fill-[#059669] stroke-[#059669] scale-110'
                                : 'fill-black/50 stroke-white group-hover/heart:fill-[#059669]/30'
                            } stroke-[2px]`}
                        size={24}
                    />
                </button>
            </div>

            <div className="mt-2 flex flex-col gap-0.5">
                <h3 className="font-medium text-[#222222] text-[13px] leading-[17px] truncate group-hover:text-green-600 transition-colors">{title}</h3>
                <p className="text-[#717171] text-[13px] leading-[17px] truncate">{dates} · {hostInfo}</p>
                <div className="flex items-center gap-1 text-[13px] leading-[17px] text-[#222222]">
                    <span className="font-medium underline decoration-transparent group-hover:decoration-gray-900 transition-all">
                        {priceText}
                    </span>
                    <span className="text-[#222222] flex items-center gap-0.5">
                        <span className="text-yellow-500">★</span> {rating.toFixed(2)}
                    </span>
                </div>
            </div>
        </Link>
    );
}
