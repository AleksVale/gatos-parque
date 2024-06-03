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
exports.VoluntaryService = void 0;
const common_1 = require("@nestjs/common");
const voluntary_repository_1 = require("../../repositories/voluntary.repository");
const client_1 = require("@prisma/client");
let VoluntaryService = class VoluntaryService {
    constructor(voluntaryRepository) {
        this.voluntaryRepository = voluntaryRepository;
    }
    async create(createVoluntaryDto) {
        await this.voluntaryRepository.create({ ...createVoluntaryDto, status: client_1.RequestStatus.PENDING });
        return { success: true };
    }
    findAll(options) {
        return this.voluntaryRepository.findAll(options);
    }
    async findOne(id) {
        const voluntary = await this.voluntaryRepository.find({
            id,
        });
        if (!voluntary)
            throw new common_1.BadRequestException('Voluntário não encontrado');
        return voluntary;
    }
    update(id, updateVoluntaryDto) {
        return this.voluntaryRepository.update(updateVoluntaryDto, { id });
    }
    async remove(id) {
        return this.voluntaryRepository.update({ status: client_1.RequestStatus.REJECTED }, { id });
    }
};
exports.VoluntaryService = VoluntaryService;
exports.VoluntaryService = VoluntaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [voluntary_repository_1.VoluntaryRepository])
], VoluntaryService);
//# sourceMappingURL=voluntary.service.js.map