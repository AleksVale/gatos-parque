"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePointDto = exports.createUserSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const zodMessage_1 = require("../../../utils/zodMessage");
exports.createUserSchema = z_1.z.object({
    name: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    reference: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
});
class CreatePointDto extends (0, nestjs_zod_1.createZodDto)(exports.createUserSchema) {
}
exports.CreatePointDto = CreatePointDto;
//# sourceMappingURL=create-point.dto.js.map