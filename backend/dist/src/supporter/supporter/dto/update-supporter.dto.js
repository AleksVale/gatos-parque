"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSupporterDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_supporter_dto_1 = require("./create-supporter.dto");
class UpdateSupporterDto extends (0, swagger_1.PartialType)(create_supporter_dto_1.CreateSupporterDto) {
}
exports.UpdateSupporterDto = UpdateSupporterDto;
//# sourceMappingURL=update-supporter.dto.js.map