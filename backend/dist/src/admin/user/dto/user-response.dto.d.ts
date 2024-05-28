import { $Enums, User } from '@prisma/client';
export declare class UserResponseDto implements User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    document: string;
    status: $Enums.UserStatus;
    password: string;
    phoneNumber: string;
    photoKey: string | null;
    addressId: string | null;
    roleId: string;
    createdAt: Date;
    updatedAt: Date;
}
