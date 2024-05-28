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
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const cats_service_1 = require("./cats.service");
const cat_response_dto_1 = require("./dto/cat-response.dto");
const create_cat_dto_1 = require("./dto/create-cat.dto");
const update_cat_dto_1 = require("./dto/update-cat.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../public/auth/jwt-auth.guard");
const roles_decorator_1 = require("../../public/decorators/roles/roles.decorator");
const role_enum_1 = require("../../public/role.enum");
const role_guard_1 = require("../../public/role/role.guard");
const success_response_dto_1 = require("../../utils/dto/success-response.dto");
const paginatedResponse_1 = require("../../public/decorators/paginatedResponse");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    async create(createCatDto) {
        await this.catsService.create(createCatDto);
        return { success: true };
    }
    async update(id, updateCatDto) {
        await this.catsService.update(id, updateCatDto);
        return { success: true };
    }
    async findAll(page, perPage) {
        return this.catsService.findAll({ page, perPage });
    }
    findOne(id) {
        return this.catsService.findOne(id);
    }
    async remove(id) {
        await this.catsService.remove(id);
        return { success: true };
    }
};
exports.CatsController = CatsController;
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cat_dto_1.UpdateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "update", null);
__decorate([
    (0, paginatedResponse_1.ApiOkResponsePaginated)(cat_response_dto_1.CatResponseDto),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('per_page', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: cat_response_dto_1.CatResponseDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "remove", null);
exports.CatsController = CatsController = __decorate([
    (0, swagger_1.ApiTags)('Admin/Cats'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, roles_decorator_1.Roles)([role_enum_1.Role.ADMIN]),
    (0, common_1.Controller)('admin/cats'),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
//# sourceMappingURL=cats.controller.js.map