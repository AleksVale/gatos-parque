import { z } from 'nestjs-zod/z';
export declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    reference: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    reference: string;
}, {
    name: string;
    reference: string;
}>;
declare const CreatePointDto_base: import("nestjs-zod").ZodDto<{
    name: string;
    reference: string;
}, z.ZodObjectDef<{
    name: z.ZodString;
    reference: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    name: string;
    reference: string;
}>;
export declare class CreatePointDto extends CreatePointDto_base {
}
export {};
