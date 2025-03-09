import { Model } from 'sequelize-typescript';
import { Account } from '../accounts/account.entity';
export declare class Setting extends Model {
    id: number;
    name: string;
    data_type: 'string' | 'number' | 'boolean' | 'json';
    account_id: number;
    account: Account;
    value: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}
