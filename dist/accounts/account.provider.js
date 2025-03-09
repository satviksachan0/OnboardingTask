"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountsProviders = void 0;
const account_entity_1 = require("./account.entity");
exports.accountsProviders = [
    {
        provide: 'ACCOUNTS_REPOSITORY',
        useValue: account_entity_1.Account,
    },
];
//# sourceMappingURL=account.provider.js.map