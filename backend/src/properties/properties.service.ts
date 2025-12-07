import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PropertiesService {
    constructor(private prisma: PrismaService) { }

    async findAll(params?: {
        location?: string;
        minPrice?: number;
        maxPrice?: number;
        guests?: number;
        category?: string;
    }) {
        const where: any = {
            status: 'active',
        };

        if (params?.location) {
            where.OR = [
                { city: { contains: params.location, mode: 'insensitive' } },
                { state: { contains: params.location, mode: 'insensitive' } },
                { country: { contains: params.location, mode: 'insensitive' } },
            ];
        }

        if (params?.guests) {
            where.guestCapacity = { gte: params.guests };
        }

        if (params?.category) {
            where.propertyType = { equals: params.category, mode: 'insensitive' };
        }

        if (params?.minPrice || params?.maxPrice) {
            where.basePrice = {};
            if (params.minPrice) where.basePrice.gte = params.minPrice;
            if (params.maxPrice) where.basePrice.lte = params.maxPrice;
        }

        const properties = await this.prisma.property.findMany({
            where,
            include: {
                photos: {
                    where: { isPrimary: true },
                    take: 1,
                },
                reviews: {
                    select: { rating: true },
                },
                host: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        profilePhotoUrl: true,
                    },
                },
            },
            take: 50,
        });

        return properties.map((property) => ({
            ...property,
            averageRating:
                property.reviews.length > 0
                    ? property.reviews.reduce((sum, r) => sum + r.rating, 0) /
                    property.reviews.length
                    : null,
            reviewCount: property.reviews.length,
        }));
    }

    async findOne(id: string) {
        return this.prisma.property.findUnique({
            where: { id },
            include: {
                photos: { orderBy: { displayOrder: 'asc' } },
                propertyAmenities: {
                    include: { amenity: true },
                },
                host: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        profilePhotoUrl: true,
                        bio: true,
                        createdAt: true,
                    },
                },
                reviews: {
                    include: {
                        reviewer: {
                            select: {
                                firstName: true,
                                lastName: true,
                                profilePhotoUrl: true,
                            },
                        },
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                },
            },
        });
    }

    async create(hostId: string, data: any) {
        // Update user to be a host
        await this.prisma.user.update({
            where: { id: hostId },
            data: { isHost: true },
        });

        return this.prisma.property.create({
            data: {
                ...data,
                hostId,
                status: 'draft',
            },
        });
    }

    async update(id: string, hostId: string, data: any) {
        // Verify ownership
        const property = await this.prisma.property.findUnique({
            where: { id },
        });

        if (!property || property.hostId !== hostId) {
            throw new Error('Not authorized');
        }

        return this.prisma.property.update({
            where: { id },
            data,
        });
    }

    async remove(id: string, hostId: string) {
        // Verify ownership
        const property = await this.prisma.property.findUnique({
            where: { id },
        });

        if (!property || property.hostId !== hostId) {
            throw new Error('Not authorized');
        }

        return this.prisma.property.delete({
            where: { id },
        });
    }
}
