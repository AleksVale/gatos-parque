import { UserStatus } from '@/interfaces/user'
import { validateCPF } from '@/lib/cpf'
import { z } from 'zod'
import dayjs from 'dayjs'

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const createUserSchema = z.object({
  email: z.string().email({ message: 'Campo obrigatório' }),
  firstName: z.string().min(1, { message: 'Campo obrigatório' }),
  lastName: z.string().min(1, { message: 'Campo obrigatório' }),
  dateOfBirth: z.coerce
    .date({ required_error: 'A data de nascimento é obrigatória' })
    .transform((date) => dayjs(date, 'YYYY-DD-MM').format('YYYY-MM-DD')),
  document: z
    .string()
    .min(14, { message: 'CPF inválido' })
    .max(14, { message: 'CPF inválido' })
    .transform((value) => value.replace(/\D/g, ''))
    .refine(validateCPF, {
      message: 'CPF inválido',
    }),
  phoneNumber: z
    .string()
    .min(13, { message: 'O número deve ter entre 13 e 15 caracteres' })
    .max(15, { message: 'O número deve ter entre 13 e 15 caracteres' })
    .transform((value) => value.replace(/\D/g, '')),
  status: z.nativeEnum(UserStatus),
  password: z
    .string()
    .min(8, { message: 'Senha inválida' })
    .regex(passwordValidation, {
      message: 'Senha inválida',
    }),
  roleId: z.string().uuid({ message: 'Campo obrigatório' }),
})

export type TCreateUserSchema = z.infer<typeof createUserSchema>
