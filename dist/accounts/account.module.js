"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsModule = void 0;
const common_1 = require("@nestjs/common");
const account_controller_1 = require("./account.controller");
const account_service_1 = require("./account.service");
const account_provider_1 = require("./account.provider");
const sequelize_1 = require("@nestjs/sequelize");
const account_entity_1 = require("./account.entity");
let AccountsModule = class AccountsModule {
};
exports.AccountsModule = AccountsModule;
exports.AccountsModule = AccountsModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([account_entity_1.Account])],
        controllers: [account_controller_1.AccountsController],
        providers: [account_service_1.AccountsService, ...account_provider_1.accountsProviders],
        exports: [account_service_1.AccountsService],
    })
], AccountsModule);
//# sourceMappingURL=account.module.js.map