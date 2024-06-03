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
exports.VoluntaryController = void 0;
const common_1 = require("@nestjs/common");
const voluntary_service_1 = require("./voluntary.service");
const voluntary_response_dto_1 = require("./dto/voluntary-response.dto");
const create_voluntary_dto_1 = require("./dto/create-voluntary.dto");
const update_voluntary_dto_1 = require("./dto/update-voluntary.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../public/auth/jwt-auth.guard");
const roles_decorator_1 = require("../../public/decorators/roles/roles.decorator");
const role_enum_1 = require("../../public/role.enum");
const role_guard_1 = require("../../public/role/role.guard");
const success_response_dto_1 = require("../../utils/dto/success-response.dto");
const paginatedResponse_1 = require("../../public/decorators/paginatedResponse");
const current_user_decorator_1 = require("../../public/auth/current-user-decorator");
let VoluntaryController = class VoluntaryController {
    constructor(voluntaryService) {
        this.voluntaryService = voluntaryService;
    }
    async create(createVoluntaryDto) {
        await this.voluntaryService.create(createVoluntaryDto);
        return { success: true };
    }
    async update(id, updateVoluntaryDto) {
        await this.voluntaryService.update(id, updateVoluntaryDto);
        return { success: true };
    }
    async findAll(page, perPage, user) {
        return this.voluntaryService.findAll({ page, perPage, user });
    }
    findOne(id) {
        return this.voluntaryService.findOne(id);
    }
    async remove(id) {
        await this.voluntaryService.remove(id);
        return { success: true };
    }
};
exports.VoluntaryController = VoluntaryController;
__decorate([
    (0, swagger_1.ApiCreatedResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_voluntary_dto_1.CreateVoluntaryDto]),
    __metadata("design:returntype", Promise)
], VoluntaryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_voluntary_dto_1.UpdateVoluntaryDto]),
    __metadata("design:returntype", Promise)
], VoluntaryController.prototype, "update", null);
__decorate([
    (0, paginatedResponse_1.ApiOkResponsePaginated)(voluntary_response_dto_1.VoluntaryResponseDto),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('per_page', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __param(2, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], VoluntaryController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: voluntary_response_dto_1.VoluntaryResponseDto }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VoluntaryController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOkResponse)({ type: success_response_dto_1.SuccessResponseDTO }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VoluntaryController.prototype, "remove", null);
exports.VoluntaryController = VoluntaryController = __decorate([
    (0, swagger_1.ApiTags)('Supporter/Voluntary'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, roles_decorator_1.Roles)([role_enum_1.Role.SUPPORTER]),
    (0, common_1.Controller)('supporter/voluntary'),
    __metadata("design:paramtypes", [voluntary_service_1.VoluntaryService])
], VoluntaryController);
//# sourceMappingURL=voluntary.controller.js.map