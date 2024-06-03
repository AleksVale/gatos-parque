"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateDTO = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const AuthenticateSchema = z_1.z.object({
    password: z_1.z
        .string({
        required_error: 'Senha é obrigatória',
    })
        .min(1),
    email: z_1.z
        .string({
        required_error: 'E-mail é obrigatório',
    })
        .email({ message: 'E-mail inválido.' }),
});
class AuthenticateDTO extends (0, nestjs_zod_1.createZodDto)(AuthenticateSchema) {
}
exports.AuthenticateDTO = AuthenticateDTO;
//# sourceMappingURL=authenticate.dto.js.map