import { AuthService } from './auth.service';
declare class RegisterDto {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
declare class LoginDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string | null;
            lastName: string | null;
        };
        accessToken: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        user: {
            id: string;
            email: string;
            firstName: string | null;
            lastName: string | null;
            isHost: boolean;
        };
        accessToken: string;
    }>;
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any, res: any): Promise<void>;
    facebookAuth(req: any): Promise<void>;
    facebookAuthRedirect(req: any, res: any): Promise<void>;
}
export {};
