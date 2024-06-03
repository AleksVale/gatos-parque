"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVoluntaryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_voluntary_dto_1 = require("./create-voluntary.dto");
class UpdateVoluntaryDto extends (0, swagger_1.PartialType)(create_voluntary_dto_1.CreateVoluntaryDto) {
}
exports.UpdateVoluntaryDto = UpdateVoluntaryDto;
//# sourceMappingURL=update-voluntary.dto.js.map