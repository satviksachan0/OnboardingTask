import { Module } from '@nestjs/common';
import { AccountsController } from './account.controller';
import { AccountsService } from './account.service';
import { accountsProviders } from './account.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './account.entity';
// import { DatabaseModule } from '../database/database.module';

@Module({
  // imports: [DatabaseModule],
  imports: [SequelizeModule.forFeature([Account])],
  controllers: [AccountsController],
  providers: [AccountsService, ...accountsProviders],
  exports: [AccountsService],
})
export class AccountsModule {}
