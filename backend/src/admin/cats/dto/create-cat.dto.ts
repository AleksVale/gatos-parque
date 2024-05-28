import { createZodDto } from 'nestjs-zod';
import { zodMessages } from 'src/utils/zodMessage';
import { z } from 'nestjs-zod/z';
import { CatStatus } from '@prisma/client';

export const createCatSchema = z.object({
  name: z.string().min(1, { message: zodMessages.required }),
  age: z.number().min(1, { message: zodMessages.required }),
  description: z.string().min(1, { message: zodMessages.required }),
  status: z.nativeEnum(CatStatus),
});

export class CreateCatDto extends createZodDto(createCatSchema) {}
