import { createZodDto } from 'nestjs-zod';
import { zodMessages } from 'src/utils/zodMessage';
import { z } from 'nestjs-zod/z';
import { Validator } from 'src/utils/validation';

export const createVoluntarySchema = z.object({
  firstName: z.string().min(1, { message: zodMessages.required }),
  lastName: z.string().min(1, { message: zodMessages.required }),
  dateOfBirth: z.dateString().format('date'),
  document: z.string().min(11).max(11).refine(Validator.validateCPF, {
    message: zodMessages.invalidCpf,
  }),
  reason: z.string().min(1, { message: zodMessages.required }),
  photoKey: z.string().nullable().optional(),
  addressId: z.string().min(1, { message: zodMessages.required }),
});

export class CreateVoluntaryDto extends createZodDto(createVoluntarySchema) {}
