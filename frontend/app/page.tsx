'use client';

import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PropertyCard } from '@/components/PropertyCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

// Mock data matching the screenshot
const popularHomes = [
  {
    id: '1',
    title: 'Room in Camberwell',
    dates: '16–18 Jan',
    hostInfo: 'Individual host',
    priceText: '£115 for 2 nights',
    rating: 4.94,
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80', // Living room with red chair vibe
    isGuestFavorite: true,
  },
  {
    id: '2',
    title: 'Room in Hammersmith',
    dates: '20–22 Feb',
    hostInfo: 'Individual host',
    priceText: '£109 for 2 nights',
    rating: 4.98,
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80', // Bedroom
    isGuestFavorite: true,
  },
  {
    id: '3',
    title: 'Room in Walthamstow',
    dates: '16–18 Jan',
    hostInfo: 'Individual host',
    priceText: '£87 for 2 nights',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80', // Colorful/Shelves
    isGuestFavorite: true,
  },
  {
    id: '4',
    title: 'Room in Friern Barnet',
    dates: '23–25 Jan',
    hostInfo: 'Individual host',
    priceText: '£87 for 2 nights',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80', // Bright bedroom
    isGuestFavorite: true,
  },
  {
    id: '5',
    title: 'Room in Mill Hill',
    dates: '2–4 Jan',
    hostInfo: 'Individual host',
    priceText: '£71 for 2 nights',
    rating: 4.97,
    imageUrl: 'https://images.unsplash.com/photo-1517620114540-4f6a4c43f8ed?w=800&q=80', // Cozy room
    isGuestFavorite: true,
  },
  {
    id: '6',
    title: 'Room in Tottenham',
    dates: '9–11 Jan',
    hostInfo: 'Individual host',
    priceText: '£82 for 2 nights',
    rating: 4.97,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', // Validated
    isGuestFavorite: true,
  },
  {
    id: '7',
    title: 'Room in Hackney',
    dates: '12–14 Jan',
    hostInfo: 'Individual host',
    priceText: '£95 for 2 nights',
    rating: 4.92,
    imageUrl: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80',
    isGuestFavorite: true,
  },
];

const parisHomes = [
  {
    id: 'p1',
    title: 'Loft in Paris',
    dates: '10–12 Feb',
    hostInfo: 'Professional host',
    priceText: '£185 for 2 nights',
    rating: 4.88,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    isGuestFavorite: true,
  },
  {
    id: 'p2',
    title: 'Studio in Marais',
    dates: '14–16 Feb',
    hostInfo: 'Individual host',
    priceText: '£140 for 2 nights',
    rating: 4.95,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    isGuestFavorite: true,
  },
  {
    id: 'p3',
    title: 'Apartment near Eiffel',
    dates: '16–18 Feb',
    hostInfo: 'Individual host',
    priceText: '£220 for 2 nights',
    rating: 4.99,
    imageUrl: 'https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?w=800&q=80', // Validated
    isGuestFavorite: true,
  },
  {
    id: 'p4',
    title: 'Charming flat in Montmartre',
    dates: '20–22 Feb',
    hostInfo: 'Individual host',
    priceText: '£135 for 2 nights',
    rating: 4.92,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    isGuestFavorite: true,
  },
  {
    id: 'p5',
    title: 'Room in Latin Quarter',
    dates: '23–25 Feb',
    hostInfo: 'Individual host',
    priceText: '£95 for 2 nights',
    rating: 4.85,
    imageUrl: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?w=800&q=80',
    isGuestFavorite: true,
  },
  {
    id: 'p6',
    title: 'View of Seine',
    dates: '1–3 Mar',
    hostInfo: 'Professional host',
    priceText: '£310 for 2 nights',
    rating: 5.0,
    imageUrl: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&q=80',
    isGuestFavorite: true,
  },
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const parisScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const { current } = ref;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-52 pb-16">
        <section className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#222222] flex items-center gap-2 cursor-pointer hover:underline">
              Popular homes in London
              <span className="text-xl">›</span>
            </h2>

            {/* Scroll Navigation */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll('left', scrollContainerRef)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:shadow-md transition active:scale-95 bg-white z-10"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right', scrollContainerRef)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:shadow-md transition active:scale-95 bg-white z-10"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Scrolling List */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {popularHomes.map((property) => (
              <div key={property.id} className="min-w-[170px] w-[170px] md:w-[190px] snap-start">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>

        </section>

        <section className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-12">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#222222] flex items-center gap-2 cursor-pointer hover:underline">
              Available in Paris this weekend
              <span className="text-xl">›</span>
            </h2>

            {/* Scroll Navigation */}
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll('left', parisScrollRef)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:shadow-md transition active:scale-95 bg-white z-10"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right', parisScrollRef)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:shadow-md transition active:scale-95 bg-white z-10"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Scrolling List */}
          <div
            ref={parisScrollRef}
            className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {parisHomes.map((property) => (
              <div key={property.id} className="min-w-[170px] w-[170px] md:w-[190px] snap-start">
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
