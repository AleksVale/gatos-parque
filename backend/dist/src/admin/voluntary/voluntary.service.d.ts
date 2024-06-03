import { CreateVoluntaryDto } from './dto/create-voluntary.dto';
import { UpdateVoluntaryDto } from './dto/update-voluntary.dto';
export declare class VoluntaryService {
    create(createVoluntaryDto: CreateVoluntaryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVoluntaryDto: UpdateVoluntaryDto): string;
    remove(id: number): string;
}
