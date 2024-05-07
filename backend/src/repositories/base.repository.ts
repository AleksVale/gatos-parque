import { PrismaService } from 'src/public/prisma/prisma.service';

export class BaseRepository<T> {
  constructor(
    private prisma: PrismaService,
    private database: string,
  ) {
    this.prisma = prisma;
    this.database = database;
  }

  async create<U>(data: U): Promise<T> {
    return await this.prisma[this.database].create({ data });
  }

  async find<U, V>(condition: U, include?: V): Promise<T | null> {
    return await this.prisma[this.database].findFirst({
      where: condition,
      include,
    });
  }

  async update<U, V>(data: U, where: V) {
    return await this.prisma[this.database].update({
      data: data,
      where: where,
    });
  }

  async delete<U>(where: U) {
    return await this.prisma[this.database].delete({ where });
  }
}
