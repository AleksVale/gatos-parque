import { UserService } from './user.service';
import { CreateUserAdminDTO } from './dto/create-user.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { UpdateUserAdminDTO } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserAdminDTO): Promise<SuccessResponseDTO>;
    update(id: string, updateUserDto: UpdateUserAdminDTO): Promise<SuccessResponseDTO>;
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<UserResponseDto>>;
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
    remove(id: string): Promise<SuccessResponseDTO>;
}
