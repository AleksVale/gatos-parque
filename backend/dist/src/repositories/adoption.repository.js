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
exports.AdoptionRepository = void 0;
const common_1 = require("@nestjs/common");
const base_repository_1 = require("./base.repository");
const prisma_service_1 = require("../public/prisma/prisma.service");
const prisma_pagination_1 = require("prisma-pagination");
let AdoptionRepository = class AdoptionRepository extends base_repository_1.BaseRepository {
    constructor(prismaService) {
        super(prismaService, 'adoption');
        this.prismaService = prismaService;
    }
    async findAll(options) {
        const paginate = (0, prisma_pagination_1.createPaginator)({ perPage: options.perPage });
        return paginate(this.prismaService.adoption, {
            where: {},
            orderBy: { createdAt: 'asc' },
        }, {
            page: options.page,
        });
    }
};
exports.AdoptionRepository = AdoptionRepository;
exports.AdoptionRepository = AdoptionRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdoptionRepository);
//# sourceMappingURL=adoption.repository.js.map