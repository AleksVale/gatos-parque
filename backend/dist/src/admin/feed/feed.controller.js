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
exports.FeedController = void 0;
const common_1 = require("@nestjs/common");
const feed_service_1 = require("./feed.service");
const create_feed_dto_1 = require("./dto/create-feed.dto");
const update_feed_dto_1 = require("./dto/update-feed.dto");
const swagger_1 = require("@nestjs/swagger");
const feed_response_dto_1 = require("./dto/feed-response.dto");
const jwt_auth_guard_1 = require("../../public/auth/jwt-auth.guard");
const role_guard_1 = require("../../public/role/role.guard");
const role_enum_1 = require("../../public/role.enum");
const roles_decorator_1 = require("../../public/decorators/roles/roles.decorator");
const paginatedResponse_1 = require("../../public/decorators/paginatedResponse");
const current_user_decorator_1 = require("../../public/auth/current-user-decorator");
let FeedController = class FeedController {
    constructor(feedService) {
        this.feedService = feedService;
    }
    create(createFeedDto, user) {
        return this.feedService.create(createFeedDto, user);
    }
    async findAll(page, perPage) {
        return this.feedService.findAll({ page, perPage });
    }
    findOne(id) {
        return this.feedService.findOne(id);
    }
    async update(id, updateFeedDto) {
        await this.feedService.update(id, updateFeedDto);
        return { success: true };
    }
    async updateStatus(id) {
        await this.feedService.updateStatus(id);
        return { success: true };
    }
    remove(id) {
        return this.feedService.remove(+id);
    }
};
exports.FeedController = FeedController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_feed_dto_1.CreateFeedDto, Object]),
    __metadata("design:returntype", void 0)
], FeedController.prototype, "create", null);
__decorate([
    (0, paginatedResponse_1.ApiOkResponsePaginated)(feed_response_dto_1.FeedResponse),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', new common_1.DefaultValuePipe(1), common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('per_page', new common_1.DefaultValuePipe(10), common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiResponse)({ type: feed_response_dto_1.FeedResponse }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeedController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_feed_dto_1.UpdateFeedDto]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('/status/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FeedController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeedController.prototype, "remove", null);
exports.FeedController = FeedController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RoleGuard),
    (0, roles_decorator_1.Roles)([role_enum_1.Role.ADMIN]),
    (0, swagger_1.ApiTags)('Admin/Feed'),
    (0, common_1.Controller)('admin/feed'),
    __metadata("design:paramtypes", [feed_service_1.FeedService])
], FeedController);
//# sourceMappingURL=feed.controller.js.map