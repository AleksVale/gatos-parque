import { VoluntaryService } from './voluntary.service';
import { VoluntaryResponseDto } from './dto/voluntary-response.dto';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
export declare class VoluntaryController {
    private readonly voluntaryService;
    constructor(voluntaryService: VoluntaryService);
    create(createVoluntaryDto: CreateVoluntaryDto): Promise<SuccessResponseDTO>;
    update(id: string, updateVoluntaryDto: UpdateVoluntaryDto): Promise<SuccessResponseDTO>;
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<VoluntaryResponseDto>>;
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
    remove(id: string): Promise<SuccessResponseDTO>;
}
