import { createZodDto } from 'nestjs-zod';
import { zodMessages } from 'src/utils/zodMessage';
import { z } from 'nestjs-zod/z';

export const createCheckin = z.object({
  routeId: z.number({ required_error: zodMessages.required }),
  pointId: z.number({ required_error: zodMessages.required }),
});

export class CreateCheckinDto extends createZodDto(createCheckin) {}
