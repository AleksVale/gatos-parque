import { createZodDto } from 'nestjs-zod';
import { createUserSchema } from './create-user.dto';

const updateUserSchema = createUserSchema.partial();

export class UpdateUserAdminDTO extends createZodDto(updateUserSchema) {}
