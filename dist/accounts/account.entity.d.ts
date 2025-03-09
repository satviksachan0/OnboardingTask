import { Model } from 'sequelize-typescript';
import { Setting } from '../settings/setting.entity';
export declare class Account extends Model {
    id: number;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    settings: Setting[];
}
