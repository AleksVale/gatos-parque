import { z } from 'nestjs-zod/z';
export declare const createCheckin: z.ZodObject<{
    routeId: z.ZodNumber;
    pointId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    pointId: number;
    routeId: number;
}, {
    pointId: number;
    routeId: number;
}>;
declare const CreateCheckinDto_base: import("nestjs-zod").ZodDto<{
    pointId: number;
    routeId: number;
}, z.ZodObjectDef<{
    routeId: z.ZodNumber;
    pointId: z.ZodNumber;
}, "strip", z.ZodTypeAny>, {
    pointId: number;
    routeId: number;
}>;
export declare class CreateCheckinDto extends CreateCheckinDto_base {
}
export {};
