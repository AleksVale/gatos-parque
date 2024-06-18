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
exports.RouteRepository = void 0;
const common_1 = require("@nestjs/common");
const base_repository_1 = require("./base.repository");
const prisma_service_1 = require("../public/prisma/prisma.service");
const prisma_pagination_1 = require("prisma-pagination");
let RouteRepository = class RouteRepository extends base_repository_1.BaseRepository {
    constructor(prismaService) {
        super(prismaService, 'route');
        this.prismaService = prismaService;
    }
    async findAll(options) {
        const paginate = (0, prisma_pagination_1.createPaginator)({ perPage: options.perPage });
        return paginate(this.prismaService.route, {
            where: { userId: options.user?.id },
            include: { RoutePoint: { include: { point: true } } },
            orderBy: { createdAt: 'asc' },
        }, {
            page: options.page,
        });
    }
    async createRoutePoints(routeId, points) {
        const data = points.map((point) => ({
            routeId,
            pointId: point,
            checkin: false,
        }));
        await this.prismaService.routePoint.createMany({ data });
    }
    async findRoutePoints(routeId, pointId) {
        return this.prismaService.routePoint.findFirst({
            where: { routeId, pointId },
        });
    }
    async createCheckin(routeId, pointId) {
        return this.prismaService.routePoint.update({
            where: { routeId_pointId: { routeId, pointId } },
            data: { checkin: true },
        });
    }
    async updatePhotoKey(photokey, routeId, pointId) {
        return this.prismaService.routePoint.update({
            where: { routeId_pointId: { routeId, pointId } },
            data: { checkinPhotoKey: photokey },
        });
    }
};
exports.RouteRepository = RouteRepository;
exports.RouteRepository = RouteRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RouteRepository);
//# sourceMappingURL=route.repository.js.map