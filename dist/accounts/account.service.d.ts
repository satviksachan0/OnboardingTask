import { Account } from './account.entity';
export declare class AccountsService {
    private accountsRepository;
    constructor(accountsRepository: typeof Account);
    findAll(): Promise<Account[]>;
    createAccount(name: string): Promise<any>;
    findOne(name: String): Promise<Account>;
}
