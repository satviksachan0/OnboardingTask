import { Setting } from './setting.entity';
export declare class SettingsService {
    private settingRepository;
    constructor(settingRepository: typeof Setting);
    findAll(): Promise<Setting[]>;
    createSetting(body: {
        name: string;
        data_type: string;
        account_id: number;
        value: any;
    }): Promise<any>;
    deleteSetting(id: number): Promise<any>;
    updateSetting(id: number, body: {
        name?: string;
        data_type?: string;
        account_id?: number;
        value?: any;
    }): Promise<any>;
    private validateValue;
}
