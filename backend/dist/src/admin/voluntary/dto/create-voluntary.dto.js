"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVoluntaryDto = exports.createVoluntarySchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zodMessage_1 = require("../../../utils/zodMessage");
const z_1 = require("nestjs-zod/z");
const client_1 = require("@prisma/client");
const validation_1 = require("../../../utils/validation");
exports.createVoluntarySchema = z_1.z.object({
    firstName: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    lastName: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    dateOfBirth: z_1.z.dateString().format('date'),
    document: z_1.z.string().min(11).max(11).refine(validation_1.Validator.validateCPF, {
        message: zodMessage_1.zodMessages.invalidCpf,
    }),
    reason: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    photoKey: z_1.z.string().nullable().optional(),
    addressId: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    status: z_1.z.nativeEnum(client_1.RequestStatus),
});
class CreateVoluntaryDto extends (0, nestjs_zod_1.createZodDto)(exports.createVoluntarySchema) {
}
exports.CreateVoluntaryDto = CreateVoluntaryDto;
//# sourceMappingURL=create-voluntary.dto.js.map