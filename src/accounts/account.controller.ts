
import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { AccountsService } from "./account.service"
import { Account } from './account.entity';
@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService) {}

  @Get('all')
  getAll(): Promise<any> {
    return this.accountsService.findAll();
  }

  @Post('createUser')
  createAccount(@Body() body: { name: string }): Promise<any> {
    return this.accountsService.createAccount(body.name)
  }
}
