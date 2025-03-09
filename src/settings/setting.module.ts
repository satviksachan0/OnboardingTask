
import { Module } from '@nestjs/common';
import {  SettingController} from './setting.controller';
import {  SettingsService} from './setting.service';
import { settingsProviders } from './setting.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SettingController],
  providers: [
    SettingsService,
    ...settingsProviders,
  ],
})
export class SettingModule {}
