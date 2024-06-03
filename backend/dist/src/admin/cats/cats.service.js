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
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const cats_repository_1 = require("../../repositories/cats.repository");
const client_1 = require("@prisma/client");
let CatsService = class CatsService {
    constructor(catsRepository) {
        this.catsRepository = catsRepository;
    }
    async create(createCatDto) {
        await this.catsRepository.create(createCatDto);
        return { success: true };
    }
    findAll(options) {
        return this.catsRepository.findAll(options);
    }
    async findOne(id) {
        const cat = await this.catsRepository.find({
            id,
        });
        if (!cat)
            throw new common_1.BadRequestException('Gato não encontrado');
        return cat;
    }
    update(id, updateCatDto) {
        return this.catsRepository.update(updateCatDto, { id });
    }
    async remove(id) {
        return this.catsRepository.update({ status: client_1.CatStatus.DISABLED }, { id });
    }
};
exports.CatsService = CatsService;
exports.CatsService = CatsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cats_repository_1.CatsRepository])
], CatsService);
//# sourceMappingURL=cats.service.js.map