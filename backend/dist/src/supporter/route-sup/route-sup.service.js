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
exports.RouteSupService = void 0;
const common_1 = require("@nestjs/common");
const aws_service_1 = require("../../public/aws/aws.service");
const route_repository_1 = require("../../repositories/route.repository");
let RouteSupService = class RouteSupService {
    constructor(routeRepository, awsService) {
        this.routeRepository = routeRepository;
        this.awsService = awsService;
    }
    async createFile(file, user, routeId, pointId) {
        const route = await this.routeRepository.findRoutePoints(routeId, pointId);
        const photoKey = route?.checkinPhotoKey
            ? route.checkinPhotoKey
            : this.awsService.createCheckInPhotoKey({
                extension: file.mimetype.split('/')[1],
                pointId: pointId,
                routeId: routeId,
                userId: user.id,
            });
        await this.awsService.updatePhoto(file, photoKey);
        return this.routeRepository.updatePhotoKey(photoKey, routeId, pointId);
    }
    async create(createCheckin) {
        await this.routeRepository.createCheckin(createCheckin.routeId, createCheckin.pointId);
    }
    findAll(options) {
        return this.routeRepository.findAll(options);
    }
};
exports.RouteSupService = RouteSupService;
exports.RouteSupService = RouteSupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [route_repository_1.RouteRepository,
        aws_service_1.AwsService])
], RouteSupService);
//# sourceMappingURL=route-sup.service.js.map