"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePointDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_point_dto_1 = require("./create-point.dto");
class UpdatePointDto extends (0, swagger_1.PartialType)(create_point_dto_1.CreatePointDto) {
}
exports.UpdatePointDto = UpdatePointDto;
//# sourceMappingURL=update-point.dto.js.map