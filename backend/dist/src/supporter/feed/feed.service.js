"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedService = void 0;
const common_1 = require("@nestjs/common");
let FeedService = class FeedService {
    create(createFeedDto) {
        return 'This action adds a new feed';
    }
    findAll() {
        return `This action returns all feed`;
    }
    findOne(id) {
        return `This action returns a #${id} feed`;
    }
    update(id, updateFeedDto) {
        return `This action updates a #${id} feed`;
    }
    remove(id) {
        return `This action removes a #${id} feed`;
    }
};
exports.FeedService = FeedService;
exports.FeedService = FeedService = __decorate([
    (0, common_1.Injectable)()
], FeedService);
//# sourceMappingURL=feed.service.js.map