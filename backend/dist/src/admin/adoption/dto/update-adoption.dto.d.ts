declare const UpdateAdoptionDto_base: import("nestjs-zod").ZodDto<{
    status?: "PENDING" | "APPROVED" | "REJECTED" | undefined;
    addressId?: string | undefined;
    userId?: string | undefined;
    catId?: string | undefined;
}, import("zod").ZodObjectDef<{
    userId: import("zod").ZodOptional<import("zod").ZodString>;
    catId: import("zod").ZodOptional<import("zod").ZodString>;
    addressId: import("zod").ZodOptional<import("zod").ZodString>;
    status: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
        PENDING: "PENDING";
        APPROVED: "APPROVED";
        REJECTED: "REJECTED";
    }>>;
}, "strip", import("zod").ZodTypeAny>, {
    status?: "PENDING" | "APPROVED" | "REJECTED" | undefined;
    addressId?: string | undefined;
    userId?: string | undefined;
    catId?: string | undefined;
}>;
export declare class UpdateAdoptionDto extends UpdateAdoptionDto_base {
}
export {};
