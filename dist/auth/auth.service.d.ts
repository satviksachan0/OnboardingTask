import { AccountsService } from '../accounts/account.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private accountsService;
    private jwtService;
    constructor(accountsService: AccountsService, jwtService: JwtService);
    signIn(name: string): Promise<{
        access_token: string;
    }>;
}
