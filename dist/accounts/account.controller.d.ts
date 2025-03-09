import { AccountsService } from "./account.service";
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    getAll(): Promise<any>;
    createAccount(body: {
        name: string;
    }): Promise<any>;
}
