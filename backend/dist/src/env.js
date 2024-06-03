"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const z_1 = require("nestjs-zod/z");
exports.envSchema = z_1.z.object({
    DATABASE_URL: z_1.z.string().url(),
    PORT: z_1.z.coerce.number().optional().default(3000),
    JWT_PRIVATE_KEY: z_1.z.string(),
    JWT_PUBLIC_KEY: z_1.z.string(),
    JWT_EXPIRATION_TIME: z_1.z.string(),
    BUCKET: z_1.z.string(),
    ACCESS_KEY_ID: z_1.z.string(),
    SECRET_ACCESS_KEY: z_1.z.string(),
    NODE_ENV: z_1.z.enum(['development', 'production']),
});
//# sourceMappingURL=env.js.map