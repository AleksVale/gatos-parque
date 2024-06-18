import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { zodMessages } from 'src/utils/zodMessage';

export const createUserSchema = z.object({
  name: z.string().min(1, { message: zodMessages.required }),
  reference: z.string().min(1, { message: zodMessages.required }),
});

export class CreatePointDto extends createZodDto(createUserSchema) {}
