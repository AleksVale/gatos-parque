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
exports.PointsService = void 0;
const common_1 = require("@nestjs/common");
const point_repository_1 = require("../../repositories/point.repository");
let PointsService = class PointsService {
    constructor(pointRepository) {
        this.pointRepository = pointRepository;
    }
    async validatePointName(name) {
        const point = await this.pointRepository.find({ name });
        if (point) {
            throw new common_1.BadRequestException(`Ponto com o nome ${name} já existe`);
        }
    }
    async create(createPointDto) {
        await this.validatePointName(createPointDto.name);
        return this.pointRepository.create(createPointDto);
    }
    findAll(options) {
        return this.pointRepository.findAll(options);
    }
    async findOne(id) {
        const point = this.pointRepository.find({
            id,
        });
        if (!point) {
            throw new common_1.BadRequestException(`Point with id ${id} not found`);
        }
        return point;
    }
    async update(id, updatePointDto) {
        await this.validatePointName(updatePointDto.name ?? '');
        return this.pointRepository.update(updatePointDto, { id });
    }
    remove(id) {
        return this.pointRepository.delete({ id });
    }
};
exports.PointsService = PointsService;
exports.PointsService = PointsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [point_repository_1.PointRepository])
], PointsService);
//# sourceMappingURL=points.service.js.map