import { UserStatus } from '@/interfaces/user'
import { validateCPF } from '@/lib/cpf'
import { z } from 'zod'

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const createUserSchema = z.object({
  email: z.string().email({ message: 'Campo obrigatório' }),
  firstName: z.string().min(1, { message: 'Campo obrigatório' }),
  lastName: z.string().min(1, { message: 'Campo obrigatório' }),
  dateOfBirth: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .transform((value) => value.split('/').reverse().join('-')),
  document: z.string().min(11).max(11).refine(validateCPF, {
    message: 'CPF inválido',
  }),
  phoneNumber: z
    .string()
    .min(10, { message: 'O número deve ter entre 10 e 11 caracteres' })
    .max(11, { message: 'O número deve ter entre 10 e 11 caracteres' }),
  status: z.nativeEnum(UserStatus),
  password: z.string().min(8).regex(passwordValidation, {
    message: 'Senha inválida',
  }),
  roleId: z.string().uuid({ message: 'Campo obrigatório' }),
})

export type TCreateUserSchema = z.infer<typeof createUserSchema>
