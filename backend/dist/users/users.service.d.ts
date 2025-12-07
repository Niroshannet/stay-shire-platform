import { PrismaService } from '../prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        email: string;
        passwordHash: string | null;
        firstName?: string;
        lastName?: string;
        profilePhotoUrl?: string;
        provider?: string;
        socialId?: string;
    }): Promise<{
        id: string;
        email: string;
        passwordHash: string | null;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        profilePhotoUrl: string | null;
        bio: string | null;
        isHost: boolean;
        isVerified: boolean;
        provider: string;
        socialId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
        passwordHash: string | null;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        profilePhotoUrl: string | null;
        bio: string | null;
        isHost: boolean;
        isVerified: boolean;
        provider: string;
        socialId: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    findById(id: string): Promise<{
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        profilePhotoUrl: string | null;
        bio: string | null;
        isHost: boolean;
        isVerified: boolean;
        createdAt: Date;
    } | null>;
    update(id: string, data: any): Promise<{
        id: string;
        email: string;
        passwordHash: string | null;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        profilePhotoUrl: string | null;
        bio: string | null;
        isHost: boolean;
        isVerified: boolean;
        provider: string;
        socialId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
