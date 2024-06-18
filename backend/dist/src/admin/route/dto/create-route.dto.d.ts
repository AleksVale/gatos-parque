import { z } from 'nestjs-zod/z';
export declare const createRouteSchema: z.ZodObject<{
    name: z.ZodString;
    userId: z.ZodString;
    monday: z.ZodBoolean;
    tuesday: z.ZodBoolean;
    wednesday: z.ZodBoolean;
    thursday: z.ZodBoolean;
    friday: z.ZodBoolean;
    saturday: z.ZodBoolean;
    sunday: z.ZodBoolean;
    points: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    userId: string;
    points: number[];
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}, {
    name: string;
    userId: string;
    points: number[];
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}>;
declare const CreateRouteDto_base: import("nestjs-zod").ZodDto<{
    name: string;
    userId: string;
    points: number[];
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}, z.ZodObjectDef<{
    name: z.ZodString;
    userId: z.ZodString;
    monday: z.ZodBoolean;
    tuesday: z.ZodBoolean;
    wednesday: z.ZodBoolean;
    thursday: z.ZodBoolean;
    friday: z.ZodBoolean;
    saturday: z.ZodBoolean;
    sunday: z.ZodBoolean;
    points: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny>, {
    name: string;
    userId: string;
    points: number[];
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}>;
export declare class CreateRouteDto extends CreateRouteDto_base {
}
export {};
