import { $Enums, Cat } from '@prisma/client';
export declare class CatResponseDto implements Cat {
    id: string;
    name: string;
    age: number;
    description: string;
    status: $Enums.CatStatus;
    createdAt: Date;
    updatedAt: Date;
    photoKey: string | null;
}
