import { z } from 'nestjs-zod/z';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3000),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  JWT_EXPIRATION_TIME: z.string(),
});

export type Env = z.infer<typeof envSchema>;
