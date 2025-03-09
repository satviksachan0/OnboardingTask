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
exports.AccountsController = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("./account.service");
let AccountsController = class AccountsController {
    accountsService;
    constructor(accountsService) {
        this.accountsService = accountsService;
    }
    getAll() {
        return this.accountsService.findAll();
    }
    createAccount(body) {
        return this.accountsService.createAccount(body.name);
    }
};
exports.AccountsController = AccountsController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)('createUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountsController.prototype, "createAccount", null);
exports.AccountsController = AccountsController = __decorate([
    (0, common_1.Controller)('accounts'),
    __metadata("design:paramtypes", [account_service_1.AccountsService])
], AccountsController);
//# sourceMappingURL=account.controller.js.map