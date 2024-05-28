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
exports.FeedService = void 0;
const common_1 = require("@nestjs/common");
const feed_repository_1 = require("../../repositories/feed.repository");
let FeedService = class FeedService {
    constructor(feedRepository) {
        this.feedRepository = feedRepository;
    }
    async create(createFeedDto, user) {
        await this.feedRepository.create({
            ...createFeedDto,
            userId: user.id,
            status: true,
        });
        return { success: true };
    }
    findAll({ page, perPage }) {
        return this.feedRepository.findAll({ page, perPage });
    }
    findOne(id) {
        return this.feedRepository.find({ id });
    }
    update(id, updateFeedDto) {
        return this.feedRepository.update({
            ...updateFeedDto,
        }, { id });
    }
    async updateStatus(id) {
        const statusAtual = await this.feedRepository.find({ id });
        if (!statusAtual) {
            throw new common_1.BadRequestException('Postagem não encontrada');
        }
        return this.feedRepository.update({
            status: !statusAtual.status,
        }, {
            id
        });
    }
    remove(id) {
        return `This action removes a #${id} feed`;
    }
};
exports.FeedService = FeedService;
exports.FeedService = FeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [feed_repository_1.FeedRepository])
], FeedService);
//# sourceMappingURL=feed.service.js.map