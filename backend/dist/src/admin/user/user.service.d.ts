import { CreateUserAdminDTO } from './dto/create-user.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { UserRepository } from 'src/repositories/user.repository';
import { UpdateUserAdminDTO } from './dto/update-user.dto';
import { CreateSupporterDTO } from 'src/public/auth/dto/create-account.dto';
export interface IFilterGetUsers {
    page: number;
    perPage: number;
}
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createSupporter(createUserDto: CreateSupporterDTO): Promise<{
        success: boolean;
    }>;
    create(createUserDto: CreateUserAdminDTO): Promise<SuccessResponseDTO>;
    update(id: string, updateUserDto: UpdateUserAdminDTO): Promise<any>;
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
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<import("./dto/user-response.dto").UserResponseDto>>;
    findOne(id: string): Promise<{
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
    }>;
    remove(id: string): Promise<any>;
}
