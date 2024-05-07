import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z
    .string({ required_error: 'Senha é obrigatória' })
    .min(1, { message: 'Senha é obrigatória' }),
})

export type TSignInForm = z.infer<typeof signInSchema>
