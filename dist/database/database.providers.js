"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const account_entity_1 = require("../accounts/account.entity");
const setting_entity_1 = require("../settings/setting.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'q_3=jb67',
                database: 'ClearFeedOnboarding',
            });
            sequelize.addModels([account_entity_1.Account, setting_entity_1.Setting]);
            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map