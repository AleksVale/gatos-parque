import { z } from 'nestjs-zod/z';
export declare const createVoluntarySchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodDateString;
    document: z.ZodEffects<z.ZodString, string, string>;
    reason: z.ZodString;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    document: string;
    reason: string;
    photoKey?: string | null | undefined;
    addressId?: string | undefined;
}, {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    document: string;
    reason: string;
    photoKey?: string | null | undefined;
    addressId?: string | undefined;
}>;
declare const CreateVoluntaryDto_base: import("nestjs-zod").ZodDto<{
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    document: string;
    reason: string;
    photoKey?: string | null | undefined;
    addressId?: string | undefined;
}, z.ZodObjectDef<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodDateString;
    document: z.ZodEffects<z.ZodString, string, string>;
    reason: z.ZodString;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny>, {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    document: string;
    reason: string;
    photoKey?: string | null | undefined;
    addressId?: string | undefined;
}>;
export declare class CreateVoluntaryDto extends CreateVoluntaryDto_base {
}
export {};
