import { z } from 'nestjs-zod/z';
export declare const createAdoptionSchema: z.ZodObject<{
    userId: z.ZodString;
    catId: z.ZodString;
    addressId: z.ZodString;
    status: z.ZodNativeEnum<{
        PENDING: "PENDING";
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
    }>;
}, "strip", z.ZodTypeAny, {
    status: "PENDING" | "APPROVED" | "REJECTED";
    addressId: string;
    userId: string;
    catId: string;
}, {
    status: "PENDING" | "APPROVED" | "REJECTED";
    addressId: string;
    userId: string;
    catId: string;
}>;
declare const CreateAdoptionDto_base: import("nestjs-zod").ZodDto<{
    status: "PENDING" | "APPROVED" | "REJECTED";
    addressId: string;
    userId: string;
    catId: string;
}, z.ZodObjectDef<{
    userId: z.ZodString;
    catId: z.ZodString;
    addressId: z.ZodString;
    status: z.ZodNativeEnum<{
        PENDING: "PENDING";
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
    }>;
}, "strip", z.ZodTypeAny>, {
    status: "PENDING" | "APPROVED" | "REJECTED";
    addressId: string;
    userId: string;
    catId: string;
}>;
export declare class CreateAdoptionDto extends CreateAdoptionDto_base {
}
export {};
