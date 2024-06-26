import { VoluntaryService } from './voluntary.service';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
export declare class VoluntaryController {
    private readonly voluntaryService;
    constructor(voluntaryService: VoluntaryService);
    create(createVoluntaryDto: CreateVoluntaryDto): Promise<SuccessResponseDTO>;
    findAll(page: number, perPage: number, user: TokenPayload): Promise<import("prisma-pagination").PaginatedResult<import("../../admin/voluntary/dto/voluntary-response.dto").VoluntaryResponseDto>>;
    findOne(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        document: string;
        reason: string;
        photoKey: string | null;
        status: import(".prisma/client").$Enums.RequestStatus;
        addressId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
