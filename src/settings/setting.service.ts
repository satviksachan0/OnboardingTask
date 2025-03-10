import { Injectable, Inject } from '@nestjs/common';
import { Setting } from './setting.entity';

@Injectable()
export class SettingsService {
  constructor(
    @Inject('SETTINGS_REPOSITORY')
    private settingRepository: typeof Setting
  ) {}

  async findAll(): Promise<Setting[]> {
    return this.settingRepository.findAll<Setting>();
  }

  async createSetting(body: { name: string, data_type: string, account_id: number, value: any }): Promise<any> {
    this.validateValue(body.value, body.data_type);
    body.value = body.value.toString();
    return this.settingRepository.create(body);
  }

  async deleteSetting(id: number): Promise<any> {
    return this.settingRepository.destroy({ where: { id: id } });
  }

  async updateSetting(id: number, body: { name?: string, data_type?: string, account_id?: number, value?: any }): Promise<any> {
    if((!body.value && body.data_type) || (!body.data_type && body.value)){
        throw new Error("give both value and data_type");
    }
    if (body.value && body.data_type) {
      this.validateValue(body.value, body.data_type);
      body.value = body.value.toString();
    }
    return this.settingRepository.update(body, { where: { id: id } });
  }

  private validateValue(value: any, dataType: string): void {
    switch (dataType) {
      case 'string':
        if (typeof value !== 'string') {
          throw new Error("Invalid value provided for data_type 'string'");
        }
        break;
      case 'number':
        if (typeof value !== 'number') {
          throw new Error("Invalid value provided for data_type 'number'");
        }
        break;
      case 'boolean':
        if (typeof value !== 'boolean') {
          throw new Error("Invalid value provided for data_type 'boolean'");
        }
        break;
      case 'json':
        try {
          JSON.parse(value);
        } catch (e) {
          throw new Error("Invalid value provided for data_type 'json'");
        }
        break;
      default:
        throw new Error("Invalid data_type provided");
    }
  }
}