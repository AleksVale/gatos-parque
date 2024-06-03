"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVoluntaryDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const create_voluntary_dto_1 = require("./create-voluntary.dto");
const updateVoluntarySchema = create_voluntary_dto_1.createVoluntarySchema.partial();
class UpdateVoluntaryDto extends (0, nestjs_zod_1.createZodDto)(updateVoluntarySchema) {
}
exports.UpdateVoluntaryDto = UpdateVoluntaryDto;
//# sourceMappingURL=update-voluntary.dto.js.map