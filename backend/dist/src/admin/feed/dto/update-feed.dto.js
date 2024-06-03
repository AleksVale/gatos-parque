"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeedDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_feed_dto_1 = require("./create-feed.dto");
class UpdateFeedDto extends (0, swagger_1.PartialType)(create_feed_dto_1.CreateFeedDto) {
}
exports.UpdateFeedDto = UpdateFeedDto;
//# sourceMappingURL=update-feed.dto.js.map