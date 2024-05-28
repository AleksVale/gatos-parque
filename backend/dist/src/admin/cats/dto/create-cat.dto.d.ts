import { z } from 'nestjs-zod/z';
export declare const createCatSchema: z.ZodObject<{
    name: z.ZodString;
    age: z.ZodNumber;
    description: z.ZodString;
    status: z.ZodNativeEnum<{
        ACTIVE: "ACTIVE";
        ADOPTED: "ADOPTED";
        DISABLED: "DISABLED";
    }>;
}, "strip", z.ZodTypeAny, {
    name: string;
    status: "ACTIVE" | "ADOPTED" | "DISABLED";
    description: string;
    age: number;
}, {
    name: string;
    status: "ACTIVE" | "ADOPTED" | "DISABLED";
    description: string;
    age: number;
}>;
declare const CreateCatDto_base: import("nestjs-zod").ZodDto<{
    name: string;
    status: "ACTIVE" | "ADOPTED" | "DISABLED";
    description: string;
    age: number;
}, z.ZodObjectDef<{
    name: z.ZodString;
    age: z.ZodNumber;
    description: z.ZodString;
    status: z.ZodNativeEnum<{
        ACTIVE: "ACTIVE";
        ADOPTED: "ADOPTED";
        DISABLED: "DISABLED";
    }>;
}, "strip", z.ZodTypeAny>, {
    name: string;
    status: "ACTIVE" | "ADOPTED" | "DISABLED";
    description: string;
    age: number;
}>;
export declare class CreateCatDto extends CreateCatDto_base {
}
export {};
