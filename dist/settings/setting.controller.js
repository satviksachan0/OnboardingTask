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
exports.SettingController = void 0;
const common_1 = require("@nestjs/common");
const setting_service_1 = require("./setting.service");
const auth_guard_1 = require("../auth/auth.guard");
let SettingController = class SettingController {
    settingService;
    constructor(settingService) {
        this.settingService = settingService;
    }
    getAll() {
        return this.settingService.findAll();
    }
    createSetting(body) {
        return this.settingService.createSetting(body);
    }
    deleteSetting(id) {
        return this.settingService.deleteSetting(id);
    }
    updateSetting(body) {
        return this.settingService.updateSetting(body.id, body.data);
    }
};
exports.SettingController = SettingController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('createSetting'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "createSetting", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "deleteSetting", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)('updateSetting'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SettingController.prototype, "updateSetting", null);
exports.SettingController = SettingController = __decorate([
    (0, common_1.Controller)('setting'),
    __metadata("design:paramtypes", [setting_service_1.SettingsService])
], SettingController);
//# sourceMappingURL=setting.controller.js.map