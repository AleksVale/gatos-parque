"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCatDto = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const create_cat_dto_1 = require("./create-cat.dto");
const updateCatSchema = create_cat_dto_1.createCatSchema.partial();
class UpdateCatDto extends (0, nestjs_zod_1.createZodDto)(updateCatSchema) {
}
exports.UpdateCatDto = UpdateCatDto;
//# sourceMappingURL=update-cat.dto.js.map