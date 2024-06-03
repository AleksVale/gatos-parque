import { $Enums, VoluntaryRequest } from '@prisma/client';
export declare class VoluntaryResponseDto implements VoluntaryRequest {
    reason: string;
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    document: string;
    status: $Enums.RequestStatus;
    photoKey: string | null;
    addressId: string;
    createdAt: Date;
    updatedAt: Date;
}
