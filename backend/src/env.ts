import { z } from 'nestjs-zod/z';

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().optional().default(3000),
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  JWT_EXPIRATION_TIME: z.string(),
  BUCKET: z.string(),
  ACCESS_KEY_ID: z.string(),
  SECRET_ACCESS_KEY: z.string(),
  NODE_ENV: z.enum(['development', 'production']),
});

export type Env = z.infer<typeof envSchema>;
