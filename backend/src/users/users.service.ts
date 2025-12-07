import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(data: {
        email: string;
        passwordHash: string | null;
        firstName?: string;
        lastName?: string;
        profilePhotoUrl?: string; // Add this too
        provider?: string;
        socialId?: string;
    }) {
        return this.prisma.user.create({
            data: {
                ...data,
                passwordHash: data.passwordHash || '', // Handle null for Prisma if it expects string (but we changed schema to optional?)
            },
        });
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }

    async findById(id: string) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                phone: true,
                profilePhotoUrl: true,
                bio: true,
                isHost: true,
                isVerified: true,
                createdAt: true,
            },
        });
    }

    async update(id: string, data: any) {
        return this.prisma.user.update({
            where: { id },
            data,
        });
    }
}
