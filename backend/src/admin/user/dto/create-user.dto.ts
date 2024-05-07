import { UserStatus } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { Validator } from 'src/utils/validation';
import { zodMessages } from 'src/utils/zodMessage';

export const createUserSchema = z.object({
  email: z.string().email({ message: zodMessages.invalidEmail }),
  firstName: z.string().min(1, { message: zodMessages.required }),
  lastName: z.string().min(1, { message: zodMessages.required }),
  dateOfBirth: z.dateString().format('date'),
  document: z.string().min(11).max(11).refine(Validator.validateCPF, {
    message: zodMessages.invalidCpf,
  }),
  status: z.nativeEnum(UserStatus),
  password: z
    .password()
    .atLeastOne('digit')
    .atLeastOne('lowercase')
    .atLeastOne('uppercase')
    .min(8),
  photoKey: z.string().nullable(),
  addressId: z.string().nullable(),
  roleId: z.string().uuid({ message: zodMessages.required }),
});

export class CreateUserAdminDTO extends createZodDto(createUserSchema) {}
