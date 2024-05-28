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
exports.AdoptionService = void 0;
const common_1 = require("@nestjs/common");
const adoption_repository_1 = require("../../repositories/adoption.repository");
const client_1 = require("@prisma/client");
let AdoptionService = class AdoptionService {
    constructor(adoptionRepository) {
        this.adoptionRepository = adoptionRepository;
    }
    async create(createAdoptionDto) {
        await this.adoptionRepository.create(createAdoptionDto);
        return { success: true };
    }
    findAll(options) {
        return this.adoptionRepository.findAll(options);
    }
    async findOne(id) {
        const adoption = await this.adoptionRepository.find({
            id,
        });
        if (!adoption)
            throw new common_1.BadRequestException('Adoção não encontrada');
        return adoption;
    }
    update(id, updateAdoptionDto) {
        return this.adoptionRepository.update(updateAdoptionDto, { id });
    }
    async remove(id) {
        return this.adoptionRepository.update({ status: client_1.RequestStatus.REJECTED }, { id });
    }
};
exports.AdoptionService = AdoptionService;
exports.AdoptionService = AdoptionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [adoption_repository_1.AdoptionRepository])
], AdoptionService);
//# sourceMappingURL=adoption.service.js.map