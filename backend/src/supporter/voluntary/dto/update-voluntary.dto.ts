import { createZodDto } from 'nestjs-zod';
import { createVoluntarySchema } from './create-voluntary.dto';

const updateVoluntarySchema = createVoluntarySchema.partial();

export class UpdateVoluntaryDto extends createZodDto(updateVoluntarySchema) {}
