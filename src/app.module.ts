import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsController } from './accounts/account.controller';
import { AccountsModule } from './accounts/account.module';
import { SettingModule } from './settings/setting.module';
import { SettingController } from './settings/setting.controller';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './accounts/account.entity';
import { Setting } from './settings/setting.entity';

@Module({
  imports: [
    AccountsModule,
    SettingModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST_DEV,
      port: 3306,
      username: process.env.DB_USERNAME_DEV,
      password: process.env.DB_PASSWORD_DEV,
      database: process.env.DB_NAME_DEV,
      models: [Account, Setting], // Add your models here
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  // imports: [],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
