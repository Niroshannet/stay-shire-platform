import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async register(email: string, password: string, firstName?: string, lastName?: string) {
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await this.usersService.create({
            email,
            passwordHash: hashedPassword,
            firstName,
            lastName,
        });

        const payload = { sub: user.id, email: user.email };
        return {
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            },
            accessToken: this.jwtService.sign(payload),
        };
    }

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);

        if (!user || !user.passwordHash) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const payload = { sub: user.id, email: user.email };
        return {
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                isHost: user.isHost,
            },
            accessToken: this.jwtService.sign(payload),
        };
    }

    async validateUser(userId: string) {
        return this.usersService.findById(userId);
    }

    // ... validateSocialUser is here ...

    async loginSocial(user: any) {
        const payload = { sub: user.id, email: user.email };
        return {
            accessToken: this.jwtService.sign(payload),
        };
    }

    async validateSocialUser(provider: string, socialId: string, email: string, firstName: string, lastName: string, photoUrl?: string) {
        let user = await this.usersService.findByEmail(email);

        if (!user) {
            // Create user for social login
            user = await this.usersService.create({
                email,
                passwordHash: null,
                firstName,
                lastName,
                profilePhotoUrl: photoUrl,
                provider,
                socialId,
            } as any); // Cast to any to avoid TS errors until client regenerates
        } else {
            // Update existing user with social info if not present
            if ((user as any).socialId !== socialId) {
                // Update logic
            }
        }

        return user;
    }
}
