import ImageGallery from '@/components/ImageGallery';
import BookingWidget from '@/components/BookingWidget';
import AmenitiesGrid from '@/components/AmenitiesGrid';
import { MapPin, Star, Share, Heart, DoorOpen, CalendarCheck, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

// Mock data for initial dev (will replace with API fetch)
const property = {
    id: '1',
    title: 'Spacious En-suite double room in a loft',
    description: 'The room is part of a self contained loft, offering privacy and peace while being close to shops, cafes, and transport links.',
    features: [
        'Fully furnished double room',
        'Private en-suite bathroom',
        'Quiet and safe neighbourhood',
        'Single occupancy only..'
    ],
    location: 'Greater London, United Kingdom',
    host: {
        name: 'Jo',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
        isSuperhost: true,
        joined: '5 years'
    },
    rating: 5.0,
    reviewsCount: 11,
    price: 95,
    maxGuests: 1,
    guestFavorite: true,
    images: [
        'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585058694038-a15d03845bb0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1628624747352-7b1v5w6y7z8x?auto=format&fit=crop&w=800&q=80',
    ],
    amenities: [
        { name: 'Wifi', icon: 'wifi' },
        { name: 'Fridge', icon: 'kitchen' },
        { name: 'Exterior security cameras on property', icon: 'security' },
        { name: 'Smoke alarm', icon: 'alarm' },
        { name: 'Free parking on premises', icon: 'parking' },
        { name: 'Microwave', icon: 'kitchen' },
        { name: 'Carbon monoxide alarm', icon: 'alarm' },
    ],
    reviews: [
        {
            id: 1,
            author: 'Simi',
            avatar: 'https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&w=100&q=80',
            date: '3 weeks ago',
            rating: 5,
            comment: 'Jo was amazing, helped with my suitcases and ensured the room was warm enough - checked on to make sure everything was ok! Will definitely be staying here again ..'
        },
        {
            id: 2,
            author: 'Elcie',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80',
            date: '3 weeks ago',
            rating: 5,
            comment: 'Host is friendly and responsive! 5 minute walk from Moorgate station! Great air bnb for a night - didn\'t provide a full size towel for me, but apart from that, so so worth the money :)'
        },
        {
            id: 3,
            author: 'Sofia',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
            date: '5 years on Airbnb',
            rating: 5,
            comment: 'Everything was amazing! Very friendly and welcoming people! The room very clean and exactly like the photos! Definitely I will stay again!'
        },
        {
            id: 4,
            author: 'Richard',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
            date: '8 years on Airbnb',
            rating: 5,
            comment: 'Excellent stay. Great place and helpful host. Will definitely use again.'
        }
    ]
};

export default function PropertyPage({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen bg-white pb-20 pt-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                {/* Header Title & Actions */}
                <div className="flex justify-between items-start mb-6">
                    <h1 className="text-[26px] font-semibold text-[#222222]">{property.title}</h1>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium underline text-[#222222]">
                            <Share className="w-4 h-4" />
                            Share
                        </button>
                        <button className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium underline text-[#222222]">
                            <Heart className="w-4 h-4" />
                            Save
                        </button>
                    </div>
                </div>

                {/* Gallery */}
                <div className="mb-8 rounded-xl overflow-hidden">
                    <ImageGallery images={property.images} title={property.title} />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-16 relative">
                    {/* Main Content */}
                    <div>
                        {/* Subheader */}
                        <div className="flex justify-between items-start border-b border-[#DDDDDD] pb-6 mb-6">
                            <div>
                                <h2 className="text-[22px] font-semibold text-[#222222] mb-1">
                                    Private room in home in {property.location}
                                </h2>
                                <ol className="flex items-center gap-1 text-[#222222] text-sm">
                                    <li>1 guest</li>
                                    <li>·</li>
                                    <li>Studio</li>
                                    <li>·</li>
                                    <li>1 bed</li>
                                    <li>·</li>
                                    <li>1 private bathroom</li>
                                </ol>
                            </div>
                        </div>

                        {/* Guest Favorite Banner */}
                        {property.guestFavorite && (
                            <div className="border border-[#DDDDDD] rounded-xl p-6 mb-8 flex items-center justify-between shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow cursor-default">
                                <div className="absolute top-4 left-4">
                                    <div className="font-semibold text-lg text-[#222222]">Guest favorite</div>
                                    <div className="text-[#717171] leading-tight max-w-[200px] mt-1">One of the most loved homes on Airbnb, according to guests</div>
                                </div>
                                <div className="ml-auto flex items-end flex-col text-center">
                                    <div className="text-[22px] font-bold text-[#222222] leading-none mb-1">{property.rating.toFixed(1)}</div>
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <Star key={s} className="w-3 h-3 fill-[#222222] text-[#222222]" />
                                        ))}
                                    </div>
                                </div>
                                <div className="mx-8 w-[1px] h-10 bg-[#DDDDDD]"></div>
                                <div className="text-center mr-8">
                                    <div className="text-[22px] font-bold text-[#222222] leading-none mb-1">{property.reviewsCount}</div>
                                    <div className="text-xs text-[#222222] underline font-medium">Reviews</div>
                                </div>
                                {/* Laurel Icon placeholder (using emoji or icon) */}
                                <div className="absolute -left-6 -top-6 text-yellow-500 opacity-20 pointer-events-none">
                                    {/* Abstract shape or svg could go here */}
                                </div>
                            </div>
                        )}


                        {/* Host Info */}
                        <div className="flex items-center gap-4 border-b border-[#DDDDDD] pb-6 mb-6">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                                <img src={property.host.image} alt={property.host.name} className="object-cover w-full h-full" />
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#222222]">Hosted by {property.host.name}</h3>
                                <p className="text-[#717171] text-sm">{property.host.joined} hosting</p>
                            </div>
                        </div>

                        {/* Awards/Highlights */}
                        <div className="border-b border-[#DDDDDD] pb-6 mb-8 space-y-6">
                            <div className="flex gap-4">
                                <Star className="w-6 h-6 text-[#222222]" />
                                <div>
                                    <h3 className="font-semibold text-[#222222] mb-0.5">Top 5% of homes</h3>
                                    <p className="text-[#717171] text-sm">This home is highly ranked based on ratings, reviews, and reliability.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <DoorOpen className="w-6 h-6 text-[#222222]" />
                                <div>
                                    <h3 className="font-semibold text-[#222222] mb-0.5">Self check-in</h3>
                                    <p className="text-[#717171] text-sm">Check yourself in with the lockbox.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <CalendarCheck className="w-6 h-6 text-[#222222]" />
                                <div>
                                    <h3 className="font-semibold text-[#222222] mb-0.5">Free cancellation before 13 January</h3>
                                    <p className="text-[#717171] text-sm">Get a full refund if you change your mind.</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="border-b border-[#DDDDDD] pb-8 mb-8">
                            <p className="text-[#222222] leading-relaxed mb-4">
                                {property.description}
                            </p>

                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <ShieldCheck className="w-5 h-5 text-green-600" />
                                    <span className="font-semibold text-[#222222]">Features:</span>
                                </div>
                                <ul className="list-disc list-inside text-[#222222] space-y-1 ml-1">
                                    {property.features.map((f, i) => (
                                        <li key={i} className="text-[#222222]">{f}</li>
                                    ))}
                                </ul>
                            </div>

                            <button className="flex items-center gap-1 font-semibold underline text-[#222222] mt-4">
                                Show more <span className="no-underline">&gt;</span>
                            </button>
                        </div>

                        {/* Sleeping Arrangements */}
                        <div className="border-b border-[#DDDDDD] pb-8 mb-8">
                            <h2 className="text-[22px] font-semibold text-[#222222] mb-6">Where you'll sleep</h2>
                            <div className="rounded-xl overflow-hidden border border-[#DDDDDD] p-4 w-[60%] sm:w-[45%]">
                                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4 relative">
                                    <img src={property.images[0]} alt="Bedroom" className="object-cover w-full h-full" />
                                </div>
                                <h3 className="font-semibold text-[#222222] mb-1">Bedroom area</h3>
                                <p className="text-sm text-[#222222]">1 double bed</p>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="border-b border-[#DDDDDD] pb-8 mb-8">
                            <h2 className="text-[22px] font-semibold text-[#222222] mb-6">What this place offers</h2>
                            <AmenitiesGrid amenities={property.amenities} />
                            <button className="mt-8 border border-green-600 px-6 py-3 rounded-lg text-green-600 font-semibold hover:bg-green-50 transition-colors">
                                Show all 14 amenities
                            </button>
                        </div>

                        {/* Rating Summary (Bottom) */}
                        <div className="border-b border-[#DDDDDD] pb-8 mb-8">
                            <div className="flex items-center justify-center mb-8 pt-8">
                                <div className="flex items-center gap-2 relative">
                                    <div className="absolute text-7xl font-bold text-[#EBEBEB] -z-10 -top-8 -left-8 opacity-50">5.0</div>
                                    <div className="text-[100px] font-bold text-[#222222] leading-[0.8]">5.0</div>
                                    <div className="flex flex-col items-center ml-4">
                                        <div className="text-lg font-bold text-[#222222] mb-1">Guest favourite</div>
                                        <div className="text-sm text-[#717171] text-center max-w-[180px]">This home is in the top 5% of eligible listings based on ratings, reviews and reliability</div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 text-sm px-4">
                                {['Overall rating', 'Cleanliness', 'Accuracy', 'Check-in', 'Communication', 'Location', 'Value'].map((item, idx) => (
                                    <div key={item} className={`flex flex-col gap-2 ${idx > 0 && idx < 6 ? 'border-l border-[#DDDDDD] pl-4' : ''}`}>
                                        <div className="font-semibold text-[#222222]">{item === 'Overall rating' ? 'Overall' : item}</div>
                                        <div className="font-semibold text-[#222222]">5.0</div>
                                        {idx !== 0 && <div className="mt-4"><ShieldCheck className="w-6 h-6 text-[#222222] stroke-[1.5]" /></div>} {/* Placeholder icons */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Reviews Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-8">
                            {property.reviews.map((review) => (
                                <div key={review.id}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                            <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#222222]">{review.author}</h4>
                                            <div className="text-sm text-[#717171]">{review.date}</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-[#222222] text-[#222222]" />
                                        ))}
                                        <span className="text-xs font-medium ml-1 text-[#222222]">· {review.date}</span>
                                    </div>
                                    <p className="text-[#222222] text-[16px] leading-6 line-clamp-4">
                                        {review.comment}
                                    </p>
                                    <button className="underline font-semibold text-[#222222] mt-2 text-sm flex items-center gap-1">
                                        Show more <span className="text-lg">›</span>
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Sidebar */}
                    <div className="relative hidden lg:block">
                        <BookingWidget
                            price={property.price}
                            rating={property.rating}
                            reviewsCount={property.reviewsCount}
                            maxGuests={property.maxGuests}
                        />
                        <div className="mt-6 flex justify-center items-center gap-2 text-sm text-[#717171] underline cursor-pointer">
                            <span className="no-underline"><img src="/icons/flag.svg" alt="" className="w-3 h-3 inline" /></span> Report this listing
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

