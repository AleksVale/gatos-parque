import { z } from 'nestjs-zod/z';
export declare const createVoluntarySchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodDateString;
    document: z.ZodEffects<z.ZodString, string, string>;
    reason: z.ZodString;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressId: z.ZodString;
    status: z.ZodNativeEnum<{
        PENDING: "PENDING";
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
    }>;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    document: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    reason: string;
    addressId: string;
    photoKey?: string | null | undefined;
}, {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    document: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    reason: string;
    addressId: string;
    photoKey?: string | null | undefined;
}>;
declare const CreateVoluntaryDto_base: import("nestjs-zod").ZodDto<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    document: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    reason: string;
    addressId: string;
    photoKey?: string | null | undefined;
}, z.ZodObjectDef<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodDateString;
    document: z.ZodEffects<z.ZodString, string, string>;
    reason: z.ZodString;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressId: z.ZodString;
    status: z.ZodNativeEnum<{
        PENDING: "PENDING";
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
    }>;
}, "strip", z.ZodTypeAny>, {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    document: string;
    status: "PENDING" | "APPROVED" | "REJECTED";
    reason: string;
    addressId: string;
    photoKey?: string | null | undefined;
}>;
export declare class CreateVoluntaryDto extends CreateVoluntaryDto_base {
}
export {};
