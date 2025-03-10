import { Module } from '@nestjs/common';
import { SettingController } from './setting.controller';
import { SettingsService } from './setting.service';
import { settingsProviders } from './setting.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { Setting } from './setting.entity';
// import { DatabaseModule } from '../database/database.module';

@Module({
  // imports: [DatabaseModule],
  imports: [SequelizeModule.forFeature([Setting])],
  controllers: [SettingController],
  providers: [SettingsService, ...settingsProviders],
})
export class SettingModule {}
