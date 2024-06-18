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
exports.RouteService = void 0;
const common_1 = require("@nestjs/common");
const route_repository_1 = require("../../repositories/route.repository");
let RouteService = class RouteService {
    constructor(routeRepository) {
        this.routeRepository = routeRepository;
    }
    async create(createRouteDto) {
        const { points, ...entity } = createRouteDto;
        const route = await this.routeRepository.create(entity);
        if (route) {
            await this.routeRepository.createRoutePoints(route.id, points);
        }
    }
    findAll(options) {
        return this.routeRepository.findAll(options);
    }
    findOne(id) {
        return this.routeRepository.find({ id }, {
            RoutePoint: true,
            user: true,
        });
    }
    update(id, updateRouteDto) {
        return this.routeRepository.update(updateRouteDto, { id });
    }
    remove(id) {
        return this.routeRepository.delete({ id });
    }
};
exports.RouteService = RouteService;
exports.RouteService = RouteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [route_repository_1.RouteRepository])
], RouteService);
//# sourceMappingURL=route.service.js.map