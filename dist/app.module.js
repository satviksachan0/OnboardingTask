"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const account_module_1 = require("./accounts/account.module");
const setting_module_1 = require("./settings/setting.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const account_entity_1 = require("./accounts/account.entity");
const setting_entity_1 = require("./settings/setting.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            account_module_1.AccountsModule,
            setting_module_1.SettingModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: process.env.DB_HOST_DEV,
                port: 3306,
                username: process.env.DB_USERNAME_DEV,
                password: process.env.DB_PASSWORD_DEV,
                database: process.env.DB_NAME_DEV,
                models: [account_entity_1.Account, setting_entity_1.Setting],
                autoLoadModels: true,
                synchronize: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map