import { z } from 'zod'

export const createRouteSchema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  userId: z.string().min(1, { message: 'Campo obrigatório' }),
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
    .array(z.object({ id: z.coerce.number(), name: z.string() }))
    .min(1, { message: 'Campo obrigatório' }),
})

export const updateRouteSchema = createRouteSchema

export type TCreateRouteSchema = z.infer<typeof createRouteSchema>
