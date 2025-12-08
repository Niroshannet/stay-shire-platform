'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PropertyCard } from '@/components/PropertyCard';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
    Home, Building2, Warehouse, Coffee, Anchor, Tent, Bus, Castle, Mountain,
    Box, Wheat, Building, Trees, Wind, Landmark, TowerControl as Tower
} from 'lucide-react';

const categories = [
    { id: 'house', label: 'House', icon: Home },
    { id: 'apartment', label: 'Apartment', icon: Building2 },
    { id: 'barn', label: 'Barn', icon: Warehouse },
    { id: 'bnb', label: 'Bed & breakfast', icon: Coffee },
    { id: 'boat', label: 'Boat', icon: Anchor },
    { id: 'cabin', label: 'Cabin', icon: Tent },
    { id: 'tiny_home', label: 'Tiny home', icon: Home },
    { id: 'treehouse', label: 'Treehouse', icon: Trees },
    // Add more as needed matching structure page
];

const mockProperties = [
    {
        id: '1',
        title: 'Luxury Villa in Beverly Hills',
        propertyType: 'Villa',
        city: 'Los Angeles',
        basePrice: 450,
        averageRating: 4.95,
        photos: [{ url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' }],
        host: { firstName: 'Sarah' }
    },
    {
        id: '2',
        title: 'Cozy Mountain Cabin',
        propertyType: 'Cabin',
        city: 'Aspen',
        basePrice: 200,
        averageRating: 4.8,
        photos: [{ url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80' }],
        host: { firstName: 'Mike' }
    },
    {
        id: '3',
        title: 'Modern Downtown Apartment',
        propertyType: 'Apartment',
        city: 'New York',
        basePrice: 300,
        averageRating: 4.9,
        photos: [{ url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80' }],
        host: { firstName: 'Jessica' }
    },
    {
        id: '4',
        title: 'Beachfront Bungalow',
        propertyType: 'House',
        city: 'Miami',
        basePrice: 350,
        averageRating: 4.85,
        photos: [{ url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80' }],
        host: { firstName: 'David' }
    },
    {
        id: '5',
        title: 'Rustic Countryside Cottage',
        propertyType: 'Cottage',
        city: 'Cotswolds',
        basePrice: 150,
        averageRating: 4.92,
        photos: [{ url: 'https://images.unsplash.com/photo-1472224371017-08207f84aaae?w=800&q=80' }],
        host: { firstName: 'Emma' }
    },
    {
        id: '6',
        title: 'Charming City Loft',
        propertyType: 'Apartment',
        city: 'Paris',
        basePrice: 220,
        averageRating: 4.88,
        photos: [{ url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80' }],
        host: { firstName: 'Pierre' }
    }
];

function SearchResults() {
    const searchParams = useSearchParams();
    const [properties, setProperties] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams(searchParams.toString());
                if (selectedCategory) params.set('category', selectedCategory);

                // Ensure backend API URL is correct
                const response = await axios.get(`http://localhost:3001/api/properties?${params.toString()}`);
                setProperties(response.data);
            } catch (error) {
                console.warn('Backend unavailable, using mock data');
                // Fallback to mock data for demo
                const filtered = selectedCategory
                    ? mockProperties.filter(p => p.propertyType.toLowerCase().includes(selectedCategory))
                    : mockProperties;
                setProperties(filtered.length > 0 ? filtered : mockProperties);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [searchParams, selectedCategory]);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Category Filter Bar */}
            <div className="pt-28 pb-4 px-4 border-b sticky top-[80px] bg-white z-20 shadow-sm">
                <div className="max-w-[1920px] mx-auto flex gap-8 overflow-x-auto scrollbar-hide pb-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                            className={`
                        flex flex-col items-center gap-2 min-w-[64px] cursor-pointer group transition-all
                        ${selectedCategory === cat.id ? 'text-black border-b-2 border-black pb-2' : 'text-gray-500 hover:text-gray-800 hover:border-b-2 hover:border-gray-200 pb-2 border-b-2 border-transparent'}
                    `}
                        >
                            <cat.icon className="w-6 h-6" />
                            <span className="text-xs font-medium whitespace-nowrap">{cat.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <main className="flex-1 pt-6 pb-16 px-4 xl:px-12 max-w-[1920px] mx-auto w-full">
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="bg-gray-200 aspect-square rounded-xl mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                ) : properties.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {properties.map((property: any) => (
                            <PropertyCard
                                key={property.id}
                                id={property.id}
                                title={property.title || `${property.propertyType} in ${property.city}`}
                                dates="Available now"
                                hostInfo={property.host ? `Hosted by ${property.host.firstName}` : 'Professional host'}
                                priceText={`$${property.basePrice} night`}
                                rating={property.averageRating || 5.0}
                                imageUrl={property.photos?.[0]?.url || 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80'}
                                isGuestFavorite={false}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="text-2xl font-semibold mb-2">No matches found</div>
                        <p className="text-gray-500">Try changing or removing some of your filters.</p>
                        <button
                            onClick={() => { setSelectedCategory(null); }}
                            className="mt-6 px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                        >
                            Remove all filters
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    );
}
