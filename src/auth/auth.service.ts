import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountsService } from '../accounts/account.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  async signIn(name: string): Promise<{ access_token: string }> {
    const user = await this.accountsService.findOne(name);
    if (!user) {
      throw new Error('No Account found');
    }
    const payload = { userId: user.id, userName: user.get('name') };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
