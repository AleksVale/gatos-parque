import { z } from 'zod'


export const createFeedSchema = z.object({
  title: z.string().min(1, { message: 'Campo obrigatório' }),
  description: z.string().min(1, { message: 'Campo obrigatório' }),
})

export type TCreateFeedSchema = z.infer<typeof createFeedSchema>
