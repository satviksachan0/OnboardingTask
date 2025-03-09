import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsController } from './accounts/account.controller';
import { AccountsModule } from './accounts/account.module';
import { SettingModule } from './settings/setting.module';
import { SettingController } from './settings/setting.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AccountsModule, SettingModule, AuthModule],
  // imports: [],

  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
