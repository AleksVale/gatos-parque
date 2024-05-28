import { AdoptionService } from './adoption.service';
import { AdoptionResponseDto } from './dto/adoption-response.dto';
import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
export declare class AdoptionController {
    private readonly adoptionService;
    constructor(adoptionService: AdoptionService);
    create(createAdoptionDto: CreateAdoptionDto): Promise<SuccessResponseDTO>;
    update(id: string, updateAdoptionDto: UpdateAdoptionDto): Promise<SuccessResponseDTO>;
    findAll(page: number, perPage: number): Promise<import("prisma-pagination").PaginatedResult<AdoptionResponseDto>>;
    findOne(id: string): Promise<{
        id: string;
        userId: string;
        catId: string;
        addressId: string;
        status: import(".prisma/client").$Enums.RequestStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<SuccessResponseDTO>;
}
