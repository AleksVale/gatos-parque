import { UserRepository } from 'src/repositories/user.repository';
export declare class SupporterService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findOne(id: number): Promise<{
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
    } | null>;
}
