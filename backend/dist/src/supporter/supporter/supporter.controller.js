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
exports.SupporterController = void 0;
const common_1 = require("@nestjs/common");
const supporter_service_1 = require("./supporter.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../public/auth/jwt-auth.guard");
const roles_decorator_1 = require("../../public/decorators/roles/roles.decorator");
const role_enum_1 = require("../../public/role.enum");
const role_guard_1 = require("../../public/role/role.guard");
const current_user_decorator_1 = require("../../public/auth/current-user-decorator");
const user_response_dto_1 = require("../../admin/user/dto/user-response.dto");
let SupporterController = class SupporterController {
    constructor(supporterService) {
        this.supporterService = supporterService;
    }
    findOne(user) {
        return this.supporterService.findOne(+user.id);
    }
};
exports.SupporterController = SupporterController;
__decorate([
    (0, swagger_1.ApiResponse)({ type: user_response_dto_1.UserResponseDto }),
    (0, common_1.Get)(),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SupporterController.prototype, "findOne", null);
exports.SupporterController = SupporterController = __decorate([
    (0, swagger_1.ApiTags)('Supporter/Supporter'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, roles_decorator_1.Roles)([role_enum_1.Role.SUPPORTER]),
    (0, common_1.Controller)('supporter'),
    __metadata("design:paramtypes", [supporter_service_1.SupporterService])
], SupporterController);
//# sourceMappingURL=supporter.controller.js.map