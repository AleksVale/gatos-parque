import { createZodDto } from 'nestjs-zod';
import { createAdoptionSchema } from './create-adoption.dto';

const updateAdoptionSchema = createAdoptionSchema.partial();

export class UpdateAdoptionDto extends createZodDto(updateAdoptionSchema) {}
