import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { AuthService } from '../auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(private authService: AuthService) {
        super({
            clientID: process.env.FACEBOOK_APP_ID || 'mock_app_id',
            clientSecret: process.env.FACEBOOK_APP_SECRET || 'mock_app_secret',
            callbackURL: 'http://localhost:3001/api/auth/facebook/callback',
            scope: ['email'],
            profileFields: ['emails', 'name', 'photos'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { name, emails, photos, id } = profile;
        const user = await this.authService.validateSocialUser('facebook', id, emails ? emails[0].value : `${id}@facebook.com`, name.givenName, name.familyName, photos ? photos[0].value : null);
        done(null, user);
    }
}
