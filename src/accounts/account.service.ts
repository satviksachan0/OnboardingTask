
import { Injectable, Inject } from '@nestjs/common';

import { Account } from './account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @Inject('ACCOUNTS_REPOSITORY')
    private accountsRepository: typeof Account
  ) {}

  async findAll(): Promise<Account[]> {
    return this.accountsRepository.findAll<Account>();
  }

  async createAccount(name: string): Promise<any> {
    const account = await this.accountsRepository.findOne({ where: { name: name } });
    if(account){
        throw new Error("This account already exists");
    }
    return this.accountsRepository.create({name: name});
  }

  async findOne(name: String): Promise<Account> {
    const account = await this.accountsRepository.findOne({ where: { name: name } });
    if (!account) {
      throw new Error("Account not found");
    }

    return account;
  }
}
