import { CreateAdoptionDto } from './dto/create-adoption.dto';
import { UpdateAdoptionDto } from './dto/update-adoption.dto';
import { AdoptionRepository } from 'src/repositories/adoption.repository';
import { SuccessResponseDTO } from 'src/utils/dto/success-response.dto';
import { IFilterGetUsers } from '../user/user.service';
export declare class AdoptionService {
    private readonly adoptionRepository;
    constructor(adoptionRepository: AdoptionRepository);
    create(createAdoptionDto: CreateAdoptionDto): Promise<SuccessResponseDTO>;
    findAll(options: IFilterGetUsers): Promise<import("prisma-pagination").PaginatedResult<import("./dto/adoption-response.dto").AdoptionResponseDto>>;
    findOne(id: string): Promise<{
        id: string;
        userId: string;
        catId: string;
        addressId: string;
        status: import(".prisma/client").$Enums.RequestStatus;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateAdoptionDto: UpdateAdoptionDto): Promise<any>;
    remove(id: string): Promise<any>;
}
