import { PrismaService } from '../prisma/prisma.service';
export declare class PropertiesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(params?: {
        location?: string;
        minPrice?: number;
        maxPrice?: number;
        guests?: number;
        category?: string;
    }): Promise<{
        averageRating: number | null;
        reviewCount: number;
        photos: {
            id: string;
            createdAt: Date;
            isPrimary: boolean;
            propertyId: string;
            url: string;
            displayOrder: number;
        }[];
        host: {
            id: string;
            firstName: string | null;
            lastName: string | null;
            profilePhotoUrl: string | null;
        };
        reviews: {
            rating: number;
        }[];
        id: string;
        createdAt: Date;
        updatedAt: Date;
        state: string | null;
        country: string | null;
        city: string | null;
        hostId: string;
        title: string;
        description: string | null;
        propertyType: string;
        addressLine1: string | null;
        postalCode: string | null;
        latitude: import("@prisma/client/runtime/library").Decimal | null;
        longitude: import("@prisma/client/runtime/library").Decimal | null;
        guestCapacity: number;
        bedrooms: number;
        beds: number;
        bathrooms: import("@prisma/client/runtime/library").Decimal;
        basePrice: import("@prisma/client/runtime/library").Decimal;
        cleaningFee: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        instantBook: boolean;
        status: string;
    }[]>;
    findOne(id: string): Promise<({
        photos: {
            id: string;
            createdAt: Date;
            isPrimary: boolean;
            propertyId: string;
            url: string;
            displayOrder: number;
        }[];
        host: {
            id: string;
            firstName: string | null;
            lastName: string | null;
            profilePhotoUrl: string | null;
            bio: string | null;
            createdAt: Date;
        };
        propertyAmenities: ({
            amenity: {
                id: string;
                name: string;
                category: string | null;
                icon: string | null;
            };
        } & {
            propertyId: string;
            amenityId: string;
        })[];
        reviews: ({
            reviewer: {
                firstName: string | null;
                lastName: string | null;
                profilePhotoUrl: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            bookingId: string;
            reviewerId: string;
            revieweeId: string;
            propertyId: string | null;
            rating: number;
            cleanlinessRating: number | null;
            accuracyRating: number | null;
            communicationRating: number | null;
            locationRating: number | null;
            valueRating: number | null;
            comment: string | null;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        state: string | null;
        country: string | null;
        city: string | null;
        hostId: string;
        title: string;
        description: string | null;
        propertyType: string;
        addressLine1: string | null;
        postalCode: string | null;
        latitude: import("@prisma/client/runtime/library").Decimal | null;
        longitude: import("@prisma/client/runtime/library").Decimal | null;
        guestCapacity: number;
        bedrooms: number;
        beds: number;
        bathrooms: import("@prisma/client/runtime/library").Decimal;
        basePrice: import("@prisma/client/runtime/library").Decimal;
        cleaningFee: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        instantBook: boolean;
        status: string;
    }) | null>;
    create(hostId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        state: string | null;
        country: string | null;
        city: string | null;
        hostId: string;
        title: string;
        description: string | null;
        propertyType: string;
        addressLine1: string | null;
        postalCode: string | null;
        latitude: import("@prisma/client/runtime/library").Decimal | null;
        longitude: import("@prisma/client/runtime/library").Decimal | null;
        guestCapacity: number;
        bedrooms: number;
        beds: number;
        bathrooms: import("@prisma/client/runtime/library").Decimal;
        basePrice: import("@prisma/client/runtime/library").Decimal;
        cleaningFee: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        instantBook: boolean;
        status: string;
    }>;
    update(id: string, hostId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        state: string | null;
        country: string | null;
        city: string | null;
        hostId: string;
        title: string;
        description: string | null;
        propertyType: string;
        addressLine1: string | null;
        postalCode: string | null;
        latitude: import("@prisma/client/runtime/library").Decimal | null;
        longitude: import("@prisma/client/runtime/library").Decimal | null;
        guestCapacity: number;
        bedrooms: number;
        beds: number;
        bathrooms: import("@prisma/client/runtime/library").Decimal;
        basePrice: import("@prisma/client/runtime/library").Decimal;
        cleaningFee: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        instantBook: boolean;
        status: string;
    }>;
    remove(id: string, hostId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        state: string | null;
        country: string | null;
        city: string | null;
        hostId: string;
        title: string;
        description: string | null;
        propertyType: string;
        addressLine1: string | null;
        postalCode: string | null;
        latitude: import("@prisma/client/runtime/library").Decimal | null;
        longitude: import("@prisma/client/runtime/library").Decimal | null;
        guestCapacity: number;
        bedrooms: number;
        beds: number;
        bathrooms: import("@prisma/client/runtime/library").Decimal;
        basePrice: import("@prisma/client/runtime/library").Decimal;
        cleaningFee: import("@prisma/client/runtime/library").Decimal | null;
        currency: string;
        instantBook: boolean;
        status: string;
    }>;
}
