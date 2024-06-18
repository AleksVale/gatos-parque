declare const UpdateVoluntaryDto_base: import("nestjs-zod").ZodDto<{
    firstName?: string | undefined;
    lastName?: string | undefined;
    dateOfBirth?: string | undefined;
    document?: string | undefined;
    photoKey?: string | null | undefined;
    addressId?: string | undefined;
    reason?: string | undefined;
}, import("zod").ZodObjectDef<{
    firstName: import("zod").ZodOptional<import("zod").ZodString>;
    lastName: import("zod").ZodOptional<import("zod").ZodString>;
    dateOfBirth: import("zod").ZodOptional<import("nestjs-zod/z").ZodDateString>;
    document: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, string, string>>;
    reason: import("zod").ZodOptional<import("zod").ZodString>;
    photoKey: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    addressId: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodString>>;
}, "strip", import("zod").ZodTypeAny>, {
    firstName?: string | undefined;
    lastName?: string | undefined;
    dateOfBirth?: string | undefined;
    document?: string | undefined;
    photoKey?: string | null | undefined;
    addressId?: string | undefined;
    reason?: string | undefined;
}>;
export declare class UpdateVoluntaryDto extends UpdateVoluntaryDto_base {
}
export {};
