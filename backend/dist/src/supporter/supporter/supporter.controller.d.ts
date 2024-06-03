import { SupporterService } from './supporter.service';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
export declare class SupporterController {
    private readonly supporterService;
    constructor(supporterService: SupporterService);
    findOne(user: TokenPayload): Promise<{
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
