import { z } from 'zod'

export const createPointSchema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  reference: z.string().min(1, { message: 'Campo obrigatório' }),
})

export type TCreatePointSchema = z.infer<typeof createPointSchema>
