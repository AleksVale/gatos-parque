"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAdminDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const create_user_dto_1 = require("./create-user.dto");
const updateUserSchema = create_user_dto_1.createUserSchema.partial();
class UpdateUserAdminDTO extends (0, nestjs_zod_1.createZodDto)(updateUserSchema) {
}
exports.UpdateUserAdminDTO = UpdateUserAdminDTO;
//# sourceMappingURL=update-user.dto.js.map