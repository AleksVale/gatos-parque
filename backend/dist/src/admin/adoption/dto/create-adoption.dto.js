"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdoptionDto = exports.createAdoptionSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zodMessage_1 = require("../../../utils/zodMessage");
const z_1 = require("nestjs-zod/z");
const client_1 = require("@prisma/client");
exports.createAdoptionSchema = z_1.z.object({
    userId: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    catId: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    addressId: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    status: z_1.z.nativeEnum(client_1.RequestStatus),
});
class CreateAdoptionDto extends (0, nestjs_zod_1.createZodDto)(exports.createAdoptionSchema) {
}
exports.CreateAdoptionDto = CreateAdoptionDto;
//# sourceMappingURL=create-adoption.dto.js.map