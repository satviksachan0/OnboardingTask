import { Injectable, Inject } from '@nestjs/common';
import { Setting } from './setting.entity';
import { CreateSettingDto } from './dto/create-setting.dto';

@Injectable()
export class SettingsService {
  constructor(
    @Inject('SETTINGS_REPOSITORY')
    private settingRepository: typeof Setting,
  ) {}

  async findAll(): Promise<Setting[]> {
    return this.settingRepository.findAll<Setting>();
  }

  async createSetting(body: CreateSettingDto): Promise<Setting> {
    this.validateValue(body.value, body.data_type);
    body.value = body.value.toString();
    return this.settingRepository.create(body as any);
  }

  async deleteSetting(id: number): Promise<number> {
    return this.settingRepository.destroy({ where: { id: id } });
  }

  async updateSetting(
    id: number,
    body: {
      name?: string;
      data_type?: string;
      account_id?: number;
      value?: any;
    },
  ): Promise<any> {
    if ((!body.value && body.data_type) || (!body.data_type && body.value)) {
      throw new Error('give both value and data_type');
    }
    if (body.value && body.data_type) {
      this.validateValue(body.value, body.data_type);
      body.value = body.value.toString();
    }
    return this.settingRepository.update(body, { where: { id: id } });
  }

  private validateValue(value: any, dataType: string): void {
    if (dataType === 'json') {
      try {
        const parsedValue = JSON.parse(value);
      } catch (e) {
        throw new Error("Invalid value provided for data_type 'json'");
      }
    } else if (dataType !== typeof value) {
      throw new Error(`Invalid value provided for data_type ${dataType}`);
    }
  }
}
