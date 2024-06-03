"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCatDto = exports.createCatSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zodMessage_1 = require("../../../utils/zodMessage");
const z_1 = require("nestjs-zod/z");
const client_1 = require("@prisma/client");
exports.createCatSchema = z_1.z.object({
    name: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    age: z_1.z.number().min(1, { message: zodMessage_1.zodMessages.required }),
    description: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    status: z_1.z.nativeEnum(client_1.CatStatus),
});
class CreateCatDto extends (0, nestjs_zod_1.createZodDto)(exports.createCatSchema) {
}
exports.CreateCatDto = CreateCatDto;
//# sourceMappingURL=create-cat.dto.js.map