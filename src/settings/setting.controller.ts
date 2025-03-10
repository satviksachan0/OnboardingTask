import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SettingsService } from './setting.service';
import { Setting } from './setting.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingsService) {}

  @UseGuards(AuthGuard)
  @Get('all')
  getAll(): Promise<Setting[]> {
    return this.settingService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('createSetting')
  createSetting(
    @Body()
    body: CreateSettingDto,
  ): Promise<Setting> {
    return this.settingService.createSetting(body);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  deleteSetting(@Param('id') id: any): Promise<number> {
    return this.settingService.deleteSetting(id);
  }

  @UseGuards(AuthGuard)
  @Put('updateSetting')
  updateSetting(
    @Body()
    body: UpdateSettingDto,
  ): Promise<Setting> {
    return this.settingService.updateSetting(body.id, body.data);
  }
}
