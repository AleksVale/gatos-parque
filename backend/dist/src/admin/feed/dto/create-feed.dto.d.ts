import { z } from 'nestjs-zod/z';
export declare const createFeedSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    description: string;
    title: string;
    photoKey?: string | null | undefined;
}, {
    description: string;
    title: string;
    photoKey?: string | null | undefined;
}>;
declare const CreateFeedDto_base: import("nestjs-zod").ZodDto<{
    description: string;
    title: string;
    photoKey?: string | null | undefined;
}, z.ZodObjectDef<{
    title: z.ZodString;
    description: z.ZodString;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny>, {
    description: string;
    title: string;
    photoKey?: string | null | undefined;
}>;
export declare class CreateFeedDto extends CreateFeedDto_base {
}
export {};
