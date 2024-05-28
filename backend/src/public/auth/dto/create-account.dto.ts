import { UserStatus } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { Validator } from 'src/utils/validation';
import { zodMessages } from 'src/utils/zodMessage';

export const createSupporterSchema = z.object({
  email: z.string().email({ message: zodMessages.invalidEmail }),
  firstName: z.string().min(1, { message: zodMessages.required }),
  lastName: z.string().min(1, { message: zodMessages.required }),
  dateOfBirth: z.dateString().format('date').optional(),
  phoneNumber: z.string().min(10).max(11).optional(),
  document: z
    .string()
    .min(11)
    .max(11)
    .refine(Validator.validateCPF, {
      message: zodMessages.invalidCpf,
    })
    .optional(),
  status: z.nativeEnum(UserStatus).optional(),
  password: z
    .password()
    .atLeastOne('digit')
    .atLeastOne('lowercase')
    .atLeastOne('uppercase')
    .min(8),
  photoKey: z.string().nullable().optional(),
  addressId: z.string().nullable().optional(),
});

export class CreateSupporterDTO extends createZodDto(createSupporterSchema) {}
