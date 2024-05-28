declare const UpdateUserAdminDTO_base: import("nestjs-zod").ZodDto<{
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    dateOfBirth?: string | undefined;
    phoneNumber?: string | undefined;
    document?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | "BLOCKED" | undefined;
    password?: string | undefined;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
    roleId?: string | undefined;
}, import("zod").ZodObjectDef<{
    email: import("zod").ZodOptional<import("zod").ZodString>;
    firstName: import("zod").ZodOptional<import("zod").ZodString>;
    lastName: import("zod").ZodOptional<import("zod").ZodString>;
    dateOfBirth: import("zod").ZodOptional<import("nestjs-zod/z").ZodDateString>;
    phoneNumber: import("zod").ZodOptional<import("zod").ZodString>;
    document: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
    status: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
        ACTIVE: "ACTIVE";
        INACTIVE: "INACTIVE";
        BLOCKED: "BLOCKED";
    }>>;
    password: import("zod").ZodOptional<import("nestjs-zod/z").ZodPassword>;
    photoKey: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    addressId: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    roleId: import("zod").ZodOptional<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny>, {
    email?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    dateOfBirth?: string | undefined;
    phoneNumber?: string | undefined;
    document?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | "BLOCKED" | undefined;
    password?: string | undefined;
    photoKey?: string | null | undefined;
    addressId?: string | null | undefined;
    roleId?: string | undefined;
}>;
export declare class UpdateUserAdminDTO extends UpdateUserAdminDTO_base {
}
export {};
