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
exports.Account = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const setting_entity_1 = require("../settings/setting.entity");
let Account = class Account extends sequelize_typescript_1.Model {
    name;
    created_at;
    updated_at;
    deleted_at;
    settings;
};
exports.Account = Account;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING),
    __metadata("design:type", String)
], Account.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Account.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Account.prototype, "updated_at", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], Account.prototype, "deleted_at", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => setting_entity_1.Setting),
    __metadata("design:type", Array)
], Account.prototype, "settings", void 0);
exports.Account = Account = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'accounts', timestamps: true, paranoid: true })
], Account);
//# sourceMappingURL=account.entity.js.map