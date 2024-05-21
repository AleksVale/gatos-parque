import { CatStatus } from '@/interfaces/cat'
import { z } from 'zod'

export const createCatSchema = z.object({
  name: z.string().min(1, { message: 'Campo obrigatório' }),
  age: z.coerce.number().min(1, { message: 'Campo obrigatório' }),
  description: z.string().min(1, { message: 'Campo obrigatório' }),
  status: z.nativeEnum(CatStatus),
})

export const updateCatSchema = createCatSchema

export type TCreateCatSchema = z.infer<typeof createCatSchema>
