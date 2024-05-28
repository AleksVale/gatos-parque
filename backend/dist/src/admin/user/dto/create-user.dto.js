"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAdminDTO = exports.createUserSchema = void 0;
const client_1 = require("@prisma/client");
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const validation_1 = require("../../../utils/validation");
const zodMessage_1 = require("../../../utils/zodMessage");
exports.createUserSchema = z_1.z.object({
    email: z_1.z.string().email({ message: zodMessage_1.zodMessages.invalidEmail }),
    firstName: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    lastName: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    dateOfBirth: z_1.z.dateString().format('date'),
    phoneNumber: z_1.z.string().min(10).max(11),
    document: z_1.z.string().min(11).max(11).refine(validation_1.Validator.validateCPF, {
        message: zodMessage_1.zodMessages.invalidCpf,
    }),
    status: z_1.z.nativeEnum(client_1.UserStatus),
    password: z_1.z
        .password()
        .atLeastOne('digit')
        .atLeastOne('lowercase')
        .atLeastOne('uppercase')
        .min(8),
    photoKey: z_1.z.string().nullable().optional(),
    addressId: z_1.z.string().nullable().optional(),
    roleId: z_1.z.string().uuid({ message: zodMessage_1.zodMessages.required }),
});
class CreateUserAdminDTO extends (0, nestjs_zod_1.createZodDto)(exports.createUserSchema) {
}
exports.CreateUserAdminDTO = CreateUserAdminDTO;
//# sourceMappingURL=create-user.dto.js.map