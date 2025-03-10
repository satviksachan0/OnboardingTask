"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsService = void 0;
const common_1 = require("@nestjs/common");
let SettingsService = class SettingsService {
    settingRepository;
    constructor(settingRepository) {
        this.settingRepository = settingRepository;
    }
    async findAll() {
        return this.settingRepository.findAll();
    }
    async createSetting(body) {
        this.validateValue(body.value, body.data_type);
        body.value = body.value.toString();
        return this.settingRepository.create(body);
    }
    async deleteSetting(id) {
        return this.settingRepository.destroy({ where: { id: id } });
    }
    async updateSetting(id, body) {
        if ((!body.value && body.data_type) || (!body.data_type && body.value)) {
            throw new Error('give both value and data_type');
        }
        if (body.value && body.data_type) {
            this.validateValue(body.value, body.data_type);
            body.value = body.value.toString();
        }
        return this.settingRepository.update(body, { where: { id: id } });
    }
    validateValue(value, dataType) {
        if (dataType === 'json') {
            try {
                const parsedValue = JSON.parse(value);
            }
            catch (e) {
                throw new Error("Invalid value provided for data_type 'json'");
            }
        }
        else if (dataType !== typeof value) {
            throw new Error(`Invalid value provided for data_type ${dataType}`);
        }
    }
};
exports.SettingsService = SettingsService;
exports.SettingsService = SettingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SETTINGS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], SettingsService);
//# sourceMappingURL=setting.service.js.map