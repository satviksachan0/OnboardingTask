"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsProviders = void 0;
const setting_entity_1 = require("./setting.entity");
exports.settingsProviders = [
    {
        provide: 'SETTINGS_REPOSITORY',
        useValue: setting_entity_1.Setting,
    },
];
//# sourceMappingURL=setting.provider.js.map