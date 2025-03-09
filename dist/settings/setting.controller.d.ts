import { SettingsService } from "./setting.service";
export declare class SettingController {
    private readonly settingService;
    constructor(settingService: SettingsService);
    getAll(): Promise<any>;
    createSetting(body: {
        name: string;
        data_type: string;
        account_id: number;
        value: string;
    }): Promise<any>;
    deleteSetting(id: any): Promise<any>;
    updateSetting(body: {
        id: number;
        data: {
            name?: string;
            data_type?: string;
            account_id?: number;
            value?: string | boolean;
        };
    }): Promise<any>;
}
