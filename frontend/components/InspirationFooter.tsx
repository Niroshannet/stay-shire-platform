'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const tabs = [
    'Popular',
    'Coastal',
    'Historic',
    'Islands',
    'Lakes',
    'Things to do'
];

const destinations: Record<string, Array<{ city: string; type: string }>> = {
    'Popular': [
        { city: 'Bath', type: 'Holiday rentals' },
        { city: 'Cheltenham', type: 'Cabin rentals' },
        { city: 'Whitby', type: 'Cabin rentals' },
        { city: 'Majorca', type: 'Holiday rentals' },
        { city: 'Bristol', type: 'Cabin rentals' },
        { city: 'Tenby', type: 'Villa rentals' },
        { city: 'Seville', type: 'House rentals' },
        { city: 'Ko Samui Island', type: 'Pet-friendly rentals' },
        { city: 'Barcelona', type: 'Flat rentals' },
        { city: 'Nottingham', type: 'Flat rentals' },
        { city: 'Lincoln', type: 'Holiday rentals' },
        { city: 'Perth', type: 'Pet-friendly rentals' },
        { city: 'Bournemouth', type: 'Cabin rentals' },
        { city: 'Bangkok', type: 'Serviced apartment rentals' },
        { city: 'Newcastle upon Tyne', type: 'Serviced apartment rentals' },
        { city: 'Athens', type: 'Villa rentals' },
        { city: 'Paris', type: 'Holiday rentals' },
    ],
    'Coastal': [
        { city: 'Weymouth Beach', type: 'Holiday rentals' },
        { city: 'Worthing Beach', type: 'Serviced apartment rentals' },
        { city: 'Cocoa Beach', type: 'Villa rentals' },
        { city: 'Zrće Beach', type: 'Holiday rentals' },
        { city: 'St. Pete Beach', type: 'Holiday rentals' },
        { city: 'Viña del Mar', type: 'House rentals' },
        { city: 'Faro', type: 'House rentals' },
        { city: 'Albufeira', type: 'Flat rentals' },
        { city: 'Kamala beach', type: 'Holiday rentals' },
        { city: 'San Francisco', type: 'Serviced apartment rentals' },
        { city: 'Bang Thao beach', type: 'Monthly Rentals' },
        { city: 'Portsmouth', type: 'Flat rentals' },
        { city: 'Sines', type: 'Villa rentals' },
        { city: 'Chesil Beach', type: 'Holiday rentals' },
        { city: 'Fistral Beach', type: 'House rentals' },
        { city: 'Victoria', type: 'Holiday rentals' },
        { city: 'Pereybere Public Beach', type: 'Holiday rentals' },
    ],
    'Historic': [],
    'Islands': [],
    'Lakes': [],
    'Things to do': [],
};

export default function InspirationFooter() {
    const [activeTab, setActiveTab] = useState('Popular');

    return (
        <div className="border-b border-gray-200 pb-8 mb-8">
            <h2 className="text-[22px] font-semibold text-[#222222] mb-4">Inspiration for future getaways</h2>

            {/* Tabs */}
            <div className="flex gap-6 overflow-x-auto border-b border-gray-200 mb-8 scrollbar-hide">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-[14px] font-medium transition-colors whitespace-nowrap relative
                            ${activeTab === tab ? 'text-[#222222] border-b-2 border-black' : 'text-[#717171] hover:text-[#222222]'}
                        `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4">
                {(destinations[activeTab] || []).map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <Link href="#" className="flex flex-col group">
                            <span className="text-[14px] font-semibold text-[#222222]">{item.city}</span>
                            <span className="text-[14px] text-[#717171] font-light">{item.type}</span>
                        </Link>
                    </div>
                ))}

                {/* Show more toggle (Visual purpose) */}
                <div className="flex flex-col justify-start">
                    <button className="flex items-center gap-1 text-[14px] font-semibold text-[#222222] hover:underline">
                        Show more <ChevronDown size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
