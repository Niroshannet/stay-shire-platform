"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PropertiesService = class PropertiesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(params) {
        const where = {
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
            if (params.minPrice)
                where.basePrice.gte = params.minPrice;
            if (params.maxPrice)
                where.basePrice.lte = params.maxPrice;
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
            averageRating: property.reviews.length > 0
                ? property.reviews.reduce((sum, r) => sum + r.rating, 0) /
                    property.reviews.length
                : null,
            reviewCount: property.reviews.length,
        }));
    }
    async findOne(id) {
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
    async create(hostId, data) {
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
    async update(id, hostId, data) {
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
    async remove(id, hostId) {
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
};
exports.PropertiesService = PropertiesService;
exports.PropertiesService = PropertiesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PropertiesService);
//# sourceMappingURL=properties.service.js.map