import { PrismaService } from '../prisma/prisma.service';
export declare class AutocompleteService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(fields?: string): Promise<any>;
}
