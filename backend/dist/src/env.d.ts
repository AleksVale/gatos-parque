import { z } from 'nestjs-zod/z';
export declare const envSchema: z.ZodObject<{
    DATABASE_URL: z.ZodString;
    PORT: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    JWT_PRIVATE_KEY: z.ZodString;
    JWT_PUBLIC_KEY: z.ZodString;
    JWT_EXPIRATION_TIME: z.ZodString;
    BUCKET: z.ZodString;
    ACCESS_KEY_ID: z.ZodString;
    SECRET_ACCESS_KEY: z.ZodString;
    NODE_ENV: z.ZodEnum<["development", "production"]>;
}, "strip", z.ZodTypeAny, {
    DATABASE_URL: string;
    PORT: number;
    JWT_PRIVATE_KEY: string;
    JWT_PUBLIC_KEY: string;
    JWT_EXPIRATION_TIME: string;
    BUCKET: string;
    ACCESS_KEY_ID: string;
    SECRET_ACCESS_KEY: string;
    NODE_ENV: "development" | "production";
}, {
    DATABASE_URL: string;
    JWT_PRIVATE_KEY: string;
    JWT_PUBLIC_KEY: string;
    JWT_EXPIRATION_TIME: string;
    BUCKET: string;
    ACCESS_KEY_ID: string;
    SECRET_ACCESS_KEY: string;
    NODE_ENV: "development" | "production";
    PORT?: number | undefined;
}>;
export type Env = z.infer<typeof envSchema>;
