import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const createRouteSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório.' }),
  userId: z.string().min(1, { message: 'O ID do usuário é obrigatório.' }),
  monday: z.boolean({ required_error: 'O campo segunda-feira é obrigatório.' }),
  tuesday: z.boolean({ required_error: 'O campo terça-feira é obrigatório.' }),
  wednesday: z.boolean({
    required_error: 'O campo quarta-feira é obrigatório.',
  }),
  thursday: z.boolean({
    required_error: 'O campo quinta-feira é obrigatório.',
  }),
  friday: z.boolean({ required_error: 'O campo sexta-feira é obrigatório.' }),
  saturday: z.boolean({ required_error: 'O campo sábado é obrigatório.' }),
  sunday: z.boolean({ required_error: 'O campo domingo é obrigatório.' }),
  points: z
    .array(z.number())
    .min(1, { message: 'Pelo menos um ponto é necessário.' }),
});

export class CreateRouteDto extends createZodDto(createRouteSchema) {}
