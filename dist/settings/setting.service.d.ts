import { Setting } from './setting.entity';
import { CreateSettingDto } from './dto/create-setting.dto';
export declare class SettingsService {
    private settingRepository;
    constructor(settingRepository: typeof Setting);
    findAll(): Promise<Setting[]>;
    createSetting(body: CreateSettingDto): Promise<Setting>;
    deleteSetting(id: number): Promise<number>;
    updateSetting(id: number, body: {
        name?: string;
        data_type?: string;
        account_id?: number;
        value?: any;
    }): Promise<any>;
    private validateValue;
}
