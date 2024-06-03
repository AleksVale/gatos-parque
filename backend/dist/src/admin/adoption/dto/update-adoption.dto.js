"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdoptionDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const create_adoption_dto_1 = require("./create-adoption.dto");
const updateAdoptionSchema = create_adoption_dto_1.createAdoptionSchema.partial();
class UpdateAdoptionDto extends (0, nestjs_zod_1.createZodDto)(updateAdoptionSchema) {
}
exports.UpdateAdoptionDto = UpdateAdoptionDto;
//# sourceMappingURL=update-adoption.dto.js.map