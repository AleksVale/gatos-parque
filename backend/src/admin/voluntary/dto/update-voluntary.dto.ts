import { PartialType } from '@nestjs/swagger';
import { CreateVoluntaryDto } from './create-voluntary.dto';

export class UpdateVoluntaryDto extends PartialType(CreateVoluntaryDto) {}
