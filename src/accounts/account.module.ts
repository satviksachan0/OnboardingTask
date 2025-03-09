
import { Module } from '@nestjs/common';
import { AccountsController } from './account.controller';
import { AccountsService } from './account.service';
import { accountsProviders } from './account.provider';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountsController],
  providers: [
    AccountsService,
    ...accountsProviders,
  ],
  exports: [AccountsService],
})
export class AccountsModule {}
