import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
import { VoluntaryRepository } from 'src/repositories/voluntary.repository';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { IFilterGetUsers } from 'src/admin/user/user.service';
import { TokenPayload } from 'src/public/auth/jwt.strategy';
export interface IGetVoluntary extends IFilterGetUsers {
    user?: TokenPayload;
}
export declare class VoluntaryService {
    private readonly voluntaryRepository;
    constructor(voluntaryRepository: VoluntaryRepository);
    create(createVoluntaryDto: CreateVoluntaryDto): Promise<SuccessResponseDTO>;
    findAll(options: IGetVoluntary): Promise<import("prisma-pagination").PaginatedResult<import("../../admin/voluntary/dto/voluntary-response.dto").VoluntaryResponseDto>>;
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
    update(id: string, updateVoluntaryDto: UpdateVoluntaryDto): Promise<any>;
    remove(id: string): Promise<any>;
}
