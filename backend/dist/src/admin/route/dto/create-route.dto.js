"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRouteDto = exports.createRouteSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
exports.createRouteSchema = z_1.z.object({
    name: z_1.z.string().min(1, { message: 'O nome é obrigatório.' }),
    userId: z_1.z.string().min(1, { message: 'O ID do usuário é obrigatório.' }),
    monday: z_1.z.boolean({ required_error: 'O campo segunda-feira é obrigatório.' }),
    tuesday: z_1.z.boolean({ required_error: 'O campo terça-feira é obrigatório.' }),
    wednesday: z_1.z.boolean({
        required_error: 'O campo quarta-feira é obrigatório.',
    }),
    thursday: z_1.z.boolean({
        required_error: 'O campo quinta-feira é obrigatório.',
    }),
    friday: z_1.z.boolean({ required_error: 'O campo sexta-feira é obrigatório.' }),
    saturday: z_1.z.boolean({ required_error: 'O campo sábado é obrigatório.' }),
    sunday: z_1.z.boolean({ required_error: 'O campo domingo é obrigatório.' }),
    points: z_1.z
        .array(z_1.z.number())
        .min(1, { message: 'Pelo menos um ponto é necessário.' }),
});
class CreateRouteDto extends (0, nestjs_zod_1.createZodDto)(exports.createRouteSchema) {
}
exports.CreateRouteDto = CreateRouteDto;
//# sourceMappingURL=create-route.dto.js.map