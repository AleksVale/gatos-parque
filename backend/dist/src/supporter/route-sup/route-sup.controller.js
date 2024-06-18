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
exports.RouteSupController = void 0;
const common_1 = require("@nestjs/common");
const route_sup_service_1 = require("./route-sup.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../public/auth/current-user-decorator");
const success_response_dto_1 = require("../../utils/dto/success-response.dto");
const create_checkin_dto_1 = require("./dto/create-checkin.dto");
const role_guard_1 = require("../../public/role/role.guard");
const jwt_auth_guard_1 = require("../../public/auth/jwt-auth.guard");
const roles_decorator_1 = require("../../public/decorators/roles/roles.decorator");
const role_enum_1 = require("../../public/role.enum");
const paginatedResponse_1 = require("../../public/decorators/paginatedResponse");
const route_response_dto_1 = require("../../admin/route/dto/route-response.dto");
let RouteSupController = class RouteSupController {
    constructor(routeSupService) {
        this.routeSupService = routeSupService;
    }
    async createFile(file, user, id, pointId) {
        await this.routeSupService.createFile(file, user, id, pointId);
        return { success: true };
    }
    async create(createCheckin) {
        await this.routeSupService.create(createCheckin);
        return { success: true };
    }
    async findAll(page, perPage, user) {
        return this.routeSupService.findAll({ page, perPage, user });
    }
};
exports.RouteSupController = RouteSupController;
__decorate([
    (0, common_1.Post)(':id/:pointId/file'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiResponse)({ type: success_response_dto_1.SuccessResponseDTO, status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Param)('pointId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number, Number]),
    __metadata("design:returntype", Promise)
], RouteSupController.prototype, "createFile", null);
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_checkin_dto_1.CreateCheckinDto]),
    __metadata("design:returntype", Promise)
], RouteSupController.prototype, "create", null);
__decorate([
    (0, paginatedResponse_1.ApiOkResponsePaginated)(route_response_dto_1.RouteResponseDto),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('per_page', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], RouteSupController.prototype, "findAll", null);
exports.RouteSupController = RouteSupController = __decorate([
    (0, swagger_1.ApiTags)('Supporter/Routes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, roles_decorator_1.Roles)([role_enum_1.Role.SUPPORTER]),
    (0, common_1.Controller)('supporter/routes'),
    __metadata("design:paramtypes", [route_sup_service_1.RouteSupService])
], RouteSupController);
//# sourceMappingURL=route-sup.controller.js.map