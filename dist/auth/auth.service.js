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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const account_service_1 = require("../accounts/account.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    accountsService;
    jwtService;
    constructor(accountsService, jwtService) {
        this.accountsService = accountsService;
        this.jwtService = jwtService;
    }
    async signIn(name) {
        const user = await this.accountsService.findOne(name);
        if (!user) {
            throw new Error('No Account found');
        }
        const payload = { userId: user.id, userName: user.get('name') };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_service_1.AccountsService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map