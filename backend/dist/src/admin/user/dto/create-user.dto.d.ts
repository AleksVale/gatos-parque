import { z } from 'nestjs-zod/z';
export declare const createUserSchema: z.ZodObject<{
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodDateString;
    phoneNumber: z.ZodString;
    document: z.ZodEffects<z.ZodString, string, string>;
    status: z.ZodNativeEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        BLOCKED: "BLOCKED";
    }>;
    password: z.ZodPassword;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roleId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
    document: string;
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    password: string;
    roleId: string;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
}, {
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
    document: string;
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    password: string;
    roleId: string;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
}>;
declare const CreateUserAdminDTO_base: import("nestjs-zod").ZodDto<{
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
    document: string;
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    password: string;
    roleId: string;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
}, z.ZodObjectDef<{
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    dateOfBirth: z.ZodDateString;
    phoneNumber: z.ZodString;
    document: z.ZodEffects<z.ZodString, string, string>;
    status: z.ZodNativeEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        BLOCKED: "BLOCKED";
    }>;
    password: z.ZodPassword;
    photoKey: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roleId: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phoneNumber: string;
    document: string;
    status: "ACTIVE" | "INACTIVE" | "BLOCKED";
    password: string;
    roleId: string;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
}>;
export declare class CreateUserAdminDTO extends CreateUserAdminDTO_base {
}
export {};
