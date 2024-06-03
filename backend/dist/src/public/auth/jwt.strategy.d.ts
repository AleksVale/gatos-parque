import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { z } from 'nestjs-zod/z';
import { Env } from 'src/env';
declare const tokenPayloadSchema: z.ZodObject<{
    id: z.ZodString;
    sub: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        profile: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string;
        profile: string;
    }, {
        name: string;
        email: string;
        profile: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    sub: {
        name: string;
        email: string;
        profile: string;
    };
}, {
    id: string;
    sub: {
        name: string;
        email: string;
        profile: string;
    };
}>;
export type TokenPayload = z.infer<typeof tokenPayloadSchema>;
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private config;
    constructor(config: ConfigService<Env, true>);
    validate(payload: TokenPayload): Promise<{
        id: string;
        sub: {
            name: string;
            email: string;
            profile: string;
        };
    }>;
}
export {};
