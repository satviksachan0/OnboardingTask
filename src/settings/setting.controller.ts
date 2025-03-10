
import { Controller, Get, Param, Body, Post, Delete, Put, UseGuards} from '@nestjs/common';
import { SettingsService } from "./setting.service"
import { Setting } from './setting.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('setting')
export class SettingController {
    constructor(private readonly settingService: SettingsService) {}

  @UseGuards(AuthGuard)
  @Get('all')
  getAll(): Promise<any> {
    return this.settingService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('createSetting')
  createSetting(@Body() body: { name: string, data_type: string, account_id: number, value: string }): Promise<any> {
    return this.settingService.createSetting(body)
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  deleteSetting(@Param('id') id: any): Promise<any>{
    return this.settingService.deleteSetting(id);
  }

  @UseGuards(AuthGuard)
  @Put('updateSetting')
  updateSetting(@Body() body: { id: number, data: { name?: string, data_type?: string, account_id?: number, value?: string|boolean }}): Promise<any> {
    return this.settingService.updateSetting(body.id, body.data);
  }
}

