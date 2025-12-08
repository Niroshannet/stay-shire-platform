'use client';

import { useState } from 'react';
import { Search, MapPin, Minus, Plus, Navigation, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function SearchBar({ compact = false }: { compact?: boolean }) {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'location' | 'dates' | 'guests' | null>(null);
    const [dateTab, setDateTab] = useState<'dates' | 'months' | 'flexible'>('dates');
    const [flexibleDuration, setFlexibleDuration] = useState('Weekend');
    const [selectedFlexibleMonths, setSelectedFlexibleMonths] = useState<string[]>([]);
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    // Detailed guest state
    const [guestCounts, setGuestCounts] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0
    });

    const totalGuests = guestCounts.adults + guestCounts.children;

    // Date formatter helper
    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    };

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (location) params.set('location', location);
        if (startDate) params.set('checkIn', startDate.toISOString());
        if (endDate) params.set('checkOut', endDate.toISOString());

        // Sum adults + children for capacity check
        if (totalGuests > 0) params.set('guests', totalGuests.toString());

        router.push(`/search?${params.toString()}`);
        setActiveTab(null);
    };

    const updateCount = (type: keyof typeof guestCounts, delta: number) => {
        setGuestCounts(prev => {
            const newValue = Math.max(0, prev[type] + delta);
            // Don't allow negative or inconsistent states if needed
            return { ...prev, [type]: newValue };
        });
    };

    const suggestions = [
        { name: 'Nearby', description: 'Find what\u2019s around you', icon: Navigation },
        { name: 'London, England', description: 'For sights like Buckingham Palace', icon: MapPin },
        { name: 'Paris, France', description: 'For its bustling nightlife', icon: MapPin },
        { name: 'Barcelona, Spain', description: 'Popular beach destination', icon: MapPin },
    ];

    const guestTypes = [
        { id: 'adults', label: 'Adults', subLabel: 'Ages 13 or above' },
        { id: 'children', label: 'Children', subLabel: 'Ages 2–12' },
        { id: 'infants', label: 'Infants', subLabel: 'Under 2' },
        { id: 'pets', label: 'Pets', subLabel: 'Bringing a service animal?' },
    ];

    return (
        <div className={`relative ${compact ? 'scale-[0.85] origin-top' : 'w-full max-w-4xl mx-auto'}`}>
            {/* Main Bar - White background, shadow, rounded pill */}
            <div className={`bg-white rounded-full flex items-center border border-gray-200 shadow-md hover:shadow-lg transition-shadow relative z-30 ${activeTab ? 'bg-gray-100' : ''}`}>

                {/* Location Input */}
                <div
                    className={`flex-1 relative rounded-full cursor-pointer group ${activeTab === 'location' ? 'bg-white shadow-xl z-20' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('location')}
                >
                    <div className="px-8 py-3.5 relative">
                        <div className="text-xs font-bold text-gray-800 tracking-wide">Where</div>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Search destinations"
                            className="w-full bg-transparent border-none p-0 text-gray-900 placeholder-gray-500 focus:ring-0 focus:outline-none text-sm truncate leading-5 font-medium"
                            autoFocus={activeTab === 'location'}
                        />
                        {location && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLocation('');
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <div className="w-4 h-4 flex items-center justify-center font-bold text-xs bg-gray-200 rounded-full">x</div>
                            </button>
                        )}
                    </div>
                </div>

                <div className={`w-[1px] h-8 bg-gray-200 ${activeTab === 'location' || activeTab === 'dates' ? 'opacity-0' : ''}`} />

                {/* Dates Input */}
                <div
                    className={`flex-[1.5] relative rounded-full cursor-pointer group ${activeTab === 'dates' ? 'bg-white shadow-xl z-20' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('dates')}
                >
                    <div className="px-8 py-3.5 relative">
                        <div className="text-xs font-bold text-gray-800 tracking-wide">When</div>
                        <div className={`text-sm truncate leading-5 pr-6 ${startDate ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                            {startDate ? (
                                endDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : formatDate(startDate)
                            ) : 'Add dates'}
                        </div>
                        {startDate && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setStartDate(null);
                                    setEndDate(null);
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <div className="w-4 h-4 flex items-center justify-center font-bold text-xs bg-gray-200 rounded-full">x</div>
                            </button>
                        )}
                    </div>
                </div>

                <div className={`w-[1px] h-8 bg-gray-200 ${activeTab === 'dates' || activeTab === 'guests' ? 'opacity-0' : ''}`} />

                {/* Guests Input */}
                <div
                    className={`flex-[1] relative rounded-full cursor-pointer flex items-center pr-2 ${activeTab === 'guests' ? 'bg-white shadow-xl z-20' : 'hover:bg-gray-100'}`}
                    onClick={() => setActiveTab('guests')}
                >
                    <div className="pl-8 py-3.5 flex-1 relative">
                        <div className="text-xs font-bold text-gray-800 tracking-wide">Who</div>
                        <div className={`text-sm truncate leading-5 pr-6 ${totalGuests > 0 ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                            {totalGuests > 0
                                ? `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}${guestCounts.infants > 0 ? `, ${guestCounts.infants} infant${guestCounts.infants !== 1 ? 's' : ''}` : ''}${guestCounts.pets > 0 ? `, ${guestCounts.pets} pet${guestCounts.pets !== 1 ? 's' : ''}` : ''}`
                                : 'Add guests'}
                        </div>
                        {totalGuests > 0 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setGuestCounts({ adults: 0, children: 0, infants: 0, pets: 0 });
                                }}
                                className="absolute right-0 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors z-30"
                            >
                                <div className="w-4 h-4 flex items-center justify-center font-bold text-xs bg-gray-200 rounded-full">x</div>
                            </button>
                        )}
                    </div>

                    {/* Search Button - Large Pink Circle */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleSearch();
                        }}
                        className={`bg-[#059669] hover:bg-[#047857] text-white p-4 rounded-full shadow-md transform transition-all flex items-center justify-center gap-2 group ${!compact && activeTab ? 'w-full max-w-[120px] rounded-full px-6' : 'w-12 h-12'}`}
                    >
                        <Search className="w-5 h-5 font-bold stroke-[3px]" />
                        {activeTab && !compact && <span className="font-semibold hidden md:block whitespace-nowrap">Search</span>}
                    </button>
                </div>

            </div>

            {/* Dropdown Panels */}
            <AnimatePresence>
                {activeTab && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.25 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-10"
                            onClick={() => setActiveTab(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95, x: activeTab === 'dates' ? '-50%' : '0%' }}
                            animate={{ opacity: 1, y: 0, scale: 1, x: activeTab === 'dates' ? '-50%' : '0%' }}
                            exit={{ opacity: 0, y: 10, scale: 0.95, x: activeTab === 'dates' ? '-50%' : '0%' }}
                            className={`absolute top-full mt-4 bg-white rounded-[32px] z-20 shadow-2xl overflow-hidden ${activeTab === 'guests' ? 'w-[400px] right-0' :
                                activeTab === 'dates' ? 'w-[760px] left-1/2' :
                                    'w-full md:w-[450px]'
                                }`}
                            style={
                                activeTab === 'guests' ? {} :
                                    activeTab === 'dates' ? {} :
                                        { left: activeTab === 'location' ? '0' : 'auto', right: activeTab === 'location' ? 'auto' : '0' }
                            }
                        >
                            {activeTab === 'location' && (
                                <div className="py-6 px-2">
                                    <div className="text-xs font-bold text-gray-500 uppercase px-6 mb-2">Suggested destinations</div>
                                    <div className="flex flex-col">
                                        {suggestions.map((place) => (
                                            <div
                                                key={place.name}
                                                onClick={() => {
                                                    setLocation(place.name === 'Nearby' ? 'Current Location' : place.name);
                                                    setActiveTab('dates');
                                                }}
                                                className="px-6 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-4 transition-colors"
                                            >
                                                <div className="p-3 bg-gray-200 rounded-xl">
                                                    <place.icon className="w-6 h-6 text-gray-800" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-gray-900 font-medium text-base">{place.name}</div>
                                                    <div className="text-gray-500 text-sm">{place.description}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'dates' && (
                                <div className="p-6 bg-white w-full shadow-none overflow-hidden">
                                    {/* Tab Switcher */}
                                    <div className="flex justify-center mb-8">
                                        <div className="bg-gray-100 p-1 rounded-full inline-flex items-center">
                                            {['Dates', 'Months', 'Flexible'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setDateTab(tab.toLowerCase() as any)}
                                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${dateTab === tab.toLowerCase() ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-800'}`}
                                                >
                                                    {tab}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {dateTab === 'dates' && (
                                        <div className="flex justify-center">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(dates) => {
                                                    const [start, end] = dates as [Date, Date];
                                                    setStartDate(start);
                                                    setEndDate(end);
                                                    if (end) setActiveTab('guests');
                                                }}
                                                startDate={startDate}
                                                endDate={endDate}
                                                selectsRange
                                                inline
                                                monthsShown={2}
                                                minDate={new Date()}
                                            />
                                        </div>
                                    )}

                                    {dateTab === 'flexible' && (
                                        <div className="space-y-8 animate-in fade-in zoom-in duration-300">
                                            <div>
                                                <h3 className="text-center text-lg font-medium text-gray-900 mb-4">How long would you like to stay?</h3>
                                                <div className="flex justify-center gap-4">
                                                    {['Weekend', 'Week', 'Month'].map((duration) => (
                                                        <button
                                                            key={duration}
                                                            onClick={() => setFlexibleDuration(duration)}
                                                            className={`px-6 py-2 rounded-full border text-sm transition-all ${flexibleDuration === duration ? 'border-[#059669] text-[#059669] bg-green-50' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                                                        >
                                                            {duration}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-center text-lg font-medium text-gray-900 mb-4">When do you want to go?</h3>
                                                <div className="grid grid-cols-6 gap-4 px-4">
                                                    {[
                                                        { label: 'December', year: '2025' },
                                                        { label: 'January', year: '2026' },
                                                        { label: 'February', year: '2026' },
                                                        { label: 'March', year: '2026' },
                                                        { label: 'April', year: '2026' },
                                                        { label: 'May', year: '2026' },
                                                    ].map((month) => {
                                                        const isSelected = selectedFlexibleMonths.includes(month.label);
                                                        return (
                                                            <button
                                                                key={month.label}
                                                                onClick={() => {
                                                                    setSelectedFlexibleMonths(prev =>
                                                                        prev.includes(month.label)
                                                                            ? prev.filter(m => m !== month.label)
                                                                            : [...prev, month.label]
                                                                    );
                                                                }}
                                                                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all h-32 w-full ${isSelected ? 'border-[#059669] bg-green-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                                                            >
                                                                <Calendar className={`w-8 h-8 mb-2 ${isSelected ? 'text-[#059669]' : 'text-gray-400'}`} strokeWidth={1.5} />
                                                                <span className="text-sm font-medium text-gray-900">{month.label}</span>
                                                                <span className="text-xs text-gray-500">{month.year}</span>
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {dateTab === 'months' && (
                                        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                                            <div className="text-lg">Months view coming soon</div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'guests' && (
                                <div className="p-8 space-y-6 bg-white">
                                    {guestTypes.map((type, index) => (
                                        <div key={type.id} className={`flex justify-between items-center ${index !== guestTypes.length - 1 ? 'pb-6 border-b border-gray-100' : ''}`}>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 text-lg">{type.label}</h3>
                                                <p className="text-sm text-gray-500 underline decoration-dotted decoration-gray-400 underline-offset-2">{type.subLabel}</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => updateCount(type.id as keyof typeof guestCounts, -1)}
                                                    className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${guestCounts[type.id as keyof typeof guestCounts] <= 0 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-400 text-gray-600 hover:border-black hover:text-black'}`}
                                                    disabled={guestCounts[type.id as keyof typeof guestCounts] <= 0}
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="text-base font-medium text-gray-900 w-6 text-center tabular-nums">
                                                    {guestCounts[type.id as keyof typeof guestCounts]}
                                                </span>
                                                <button
                                                    onClick={() => updateCount(type.id as keyof typeof guestCounts, 1)}
                                                    className="w-8 h-8 rounded-full border border-gray-400 text-gray-600 hover:border-black hover:text-black flex items-center justify-center transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default SearchBar;
