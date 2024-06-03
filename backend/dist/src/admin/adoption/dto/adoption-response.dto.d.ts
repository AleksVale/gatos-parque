import { $Enums, Adoption } from '@prisma/client';
export declare class AdoptionResponseDto implements Adoption {
    id: string;
    userId: string;
    catId: string;
    addressId: string;
    status: $Enums.RequestStatus;
    createdAt: Date;
    updatedAt: Date;
}
