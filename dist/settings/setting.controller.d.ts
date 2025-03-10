import { SettingsService } from './setting.service';
import { Setting } from './setting.entity';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
export declare class SettingController {
    private readonly settingService;
    constructor(settingService: SettingsService);
    getAll(): Promise<Setting[]>;
    createSetting(body: CreateSettingDto): Promise<Setting>;
    deleteSetting(id: any): Promise<number>;
    updateSetting(body: UpdateSettingDto): Promise<Setting>;
}
