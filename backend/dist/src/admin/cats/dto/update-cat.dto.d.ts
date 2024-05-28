declare const UpdateCatDto_base: import("nestjs-zod").ZodDto<{
    name?: string | undefined;
    status?: "ACTIVE" | "ADOPTED" | "DISABLED" | undefined;
    description?: string | undefined;
    age?: number | undefined;
}, import("zod").ZodObjectDef<{
    name: import("zod").ZodOptional<import("zod").ZodString>;
    age: import("zod").ZodOptional<import("zod").ZodNumber>;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    status: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
        ACTIVE: "ACTIVE";
        ADOPTED: "ADOPTED";
        DISABLED: "DISABLED";
    }>>;
}, "strip", import("zod").ZodTypeAny>, {
    name?: string | undefined;
    status?: "ACTIVE" | "ADOPTED" | "DISABLED" | undefined;
    description?: string | undefined;
    age?: number | undefined;
}>;
export declare class UpdateCatDto extends UpdateCatDto_base {
}
export {};
