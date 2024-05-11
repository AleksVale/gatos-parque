import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';
import { zodMessages } from 'src/utils/zodMessage';

export const createFeedSchema = z.object({
  title: z.string().min(1, { message: zodMessages.required }),
  description: z.string().min(1, { message: zodMessages.required }),
  photoKey: z.string().nullable().optional(),
});

export class CreateFeedDto extends createZodDto(createFeedSchema) {}
