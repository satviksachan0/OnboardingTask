import { AccountsService } from './account.service';
import { Account } from './account.entity';
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    getAll(): Promise<Account[]>;
    createAccount(body: {
        name: string;
    }): Promise<Account>;
}
