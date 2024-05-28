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
exports.AdoptionController = void 0;
const common_1 = require("@nestjs/common");
const adoption_service_1 = require("./adoption.service");
const adoption_response_dto_1 = require("./dto/adoption-response.dto");
const create_adoption_dto_1 = require("./dto/create-adoption.dto");
const update_adoption_dto_1 = require("./dto/update-adoption.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../public/auth/jwt-auth.guard");
const roles_decorator_1 = require("../../public/decorators/roles/roles.decorator");
const role_enum_1 = require("../../public/role.enum");
const role_guard_1 = require("../../public/role/role.guard");
const success_response_dto_1 = require("../../utils/dto/success-response.dto");
const paginatedResponse_1 = require("../../public/decorators/paginatedResponse");
let AdoptionController = class AdoptionController {
    constructor(adoptionService) {
        this.adoptionService = adoptionService;
    }
    async create(createAdoptionDto) {
        await this.adoptionService.create(createAdoptionDto);
        return { success: true };
    }
    async update(id, updateAdoptionDto) {
        await this.adoptionService.update(id, updateAdoptionDto);
        return { success: true };
    }
    async findAll(page, perPage) {
        return this.adoptionService.findAll({ page, perPage });
    }
    findOne(id) {
        return this.adoptionService.findOne(id);
    }
    async remove(id) {
        await this.adoptionService.remove(id);
        return { success: true };
    }
};
exports.AdoptionController = AdoptionController;
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_adoption_dto_1.CreateAdoptionDto]),
    __metadata("design:returntype", Promise)
], AdoptionController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_adoption_dto_1.UpdateAdoptionDto]),
    __metadata("design:returntype", Promise)
], AdoptionController.prototype, "update", null);
__decorate([
    (0, paginatedResponse_1.ApiOkResponsePaginated)(adoption_response_dto_1.AdoptionResponseDto),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('per_page', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AdoptionController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: adoption_response_dto_1.AdoptionResponseDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdoptionController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdoptionController.prototype, "remove", null);
exports.AdoptionController = AdoptionController = __decorate([
    (0, swagger_1.ApiTags)('Admin/Adoption'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, roles_decorator_1.Roles)([role_enum_1.Role.ADMIN]),
    (0, common_1.Controller)('admin/adoption'),
    __metadata("design:paramtypes", [adoption_service_1.AdoptionService])
], AdoptionController);
//# sourceMappingURL=adoption.controller.js.map