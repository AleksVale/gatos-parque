import { BaseRepository } from './base.repository';
import { User } from '@prisma/client';
import { PrismaService } from 'src/public/prisma/prisma.service';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { UserResponseDto } from 'src/admin/user/dto/user-response.dto';
export declare class UserRepository extends BaseRepository<User> {
    private prismaService;
    constructor(prismaService: PrismaService);
    findByEmail(email: string): Promise<({
        role: {
            id: string;
            name: string;
            label: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date | null;
        phoneNumber: string | null;
        document: string | null;
        status: import(".prisma/client").$Enums.UserStatus;
        password: string;
        photoKey: string | null;
        addressId: string | null;
        roleId: string;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<UserResponseDto>>;
}
