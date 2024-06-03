import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
import { VoluntaryRepository } from 'src/repositories/voluntary.repository';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { IFilterGetUsers } from '../user/user.service';
export declare class VoluntaryService {
    private readonly voluntaryRepository;
    constructor(voluntaryRepository: VoluntaryRepository);
    create(createVoluntaryDto: CreateVoluntaryDto): Promise<SuccessResponseDTO>;
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<import("./dto/voluntary-response.dto").VoluntaryResponseDto>>;
    findOne(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        document: string;
        reason: string;
        photoKey: string | null;
        status: import(".prisma/client").$Enums.RequestStatus;
        addressId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateVoluntaryDto: UpdateVoluntaryDto): Promise<any>;
    remove(id: string): Promise<any>;
}
