import { z } from 'nestjs-zod/z';
export declare const createSupporterSchema: z.ZodObject<{
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodOptional<z.ZodDateString>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    document: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    status: z.ZodOptional<z.ZodNativeEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        BLOCKED: "BLOCKED";
    }>>;
    password: z.ZodPassword;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    dateOfBirth?: string | undefined;
    phoneNumber?: string | undefined;
    document?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | "BLOCKED" | undefined;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
}, {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    dateOfBirth?: string | undefined;
    phoneNumber?: string | undefined;
    document?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | "BLOCKED" | undefined;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
}>;
declare const CreateSupporterDTO_base: import("nestjs-zod").ZodDto<{
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    dateOfBirth?: string | undefined;
    phoneNumber?: string | undefined;
    document?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | "BLOCKED" | undefined;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
}, z.ZodObjectDef<{
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodOptional<z.ZodDateString>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    document: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    status: z.ZodOptional<z.ZodNativeEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        BLOCKED: "BLOCKED";
    }>>;
    password: z.ZodPassword;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny>, {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    dateOfBirth?: string | undefined;
    phoneNumber?: string | undefined;
    document?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | "BLOCKED" | undefined;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
}>;
export declare class CreateSupporterDTO extends CreateSupporterDTO_base {
}
export {};
