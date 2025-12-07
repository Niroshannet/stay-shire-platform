import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(email: string, password: string, firstName?: string, lastName?: string): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string | null;
            lastName: string | null;
        };
        accessToken: string;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string | null;
            lastName: string | null;
            isHost: boolean;
        };
        accessToken: string;
    }>;
    validateUser(userId: string): Promise<{
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
    loginSocial(user: any): Promise<{
        accessToken: string;
    }>;
    validateSocialUser(provider: string, socialId: string, email: string, firstName: string, lastName: string, photoUrl?: string): Promise<{
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
