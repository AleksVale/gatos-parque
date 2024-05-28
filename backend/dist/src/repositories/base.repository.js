"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(prisma, database) {
        this.prisma = prisma;
        this.database = database;
        this.prisma = prisma;
        this.database = database;
    }
    async create(data) {
        return await this.prisma[this.database].create({ data });
    }
    async find(condition, include) {
        return await this.prisma[this.database].findFirst({
            where: condition,
            include,
        });
    }
    async update(data, where) {
        return await this.prisma[this.database].update({
            data: data,
            where: where,
        });
    }
    async delete(where) {
        return await this.prisma[this.database].delete({ where });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map