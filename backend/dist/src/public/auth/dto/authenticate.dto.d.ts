import { z } from 'nestjs-zod/z';
declare const AuthenticateDTO_base: import("nestjs-zod").ZodDto<{
    email: string;
    password: string;
}, z.ZodObjectDef<{
    password: z.ZodString;
    email: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    email: string;
    password: string;
}>;
export declare class AuthenticateDTO extends AuthenticateDTO_base {
}
export {};
