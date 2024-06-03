import { VoluntaryService } from './voluntary.service';
import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
export declare class VoluntaryController {
    private readonly voluntaryService;
    constructor(voluntaryService: VoluntaryService);
    create(createVoluntaryDto: CreateVoluntaryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVoluntaryDto: UpdateVoluntaryDto): string;
    remove(id: string): string;
}
