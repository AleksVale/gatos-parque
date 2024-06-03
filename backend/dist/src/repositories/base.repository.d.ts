import { PrismaService } from 'src/public/prisma/prisma.service';
export declare class BaseRepository<T> {
    private prisma;
    private database;
    constructor(prisma: PrismaService, database: string);
    create<U>(data: U): Promise<T>;
    find<U, V>(condition: U, include?: V): Promise<T | null>;
    update<U, V>(data: U, where: V): Promise<any>;
    delete<U>(where: U): Promise<any>;
}
