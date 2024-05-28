import { createZodDto } from 'nestjs-zod';
import { zodMessages } from 'src/utils/zodMessage';
import { z } from 'nestjs-zod/z';
import { RequestStatus } from '@prisma/client';

export const createAdoptionSchema = z.object({
  userId: z.string().min(1, { message: zodMessages.required }),
  catId: z.string().min(1, { message: zodMessages.required }),
  addressId: z.string().min(1, { message: zodMessages.required }),
  status: z.nativeEnum(RequestStatus),
});

export class CreateAdoptionDto extends createZodDto(createAdoptionSchema) {}
