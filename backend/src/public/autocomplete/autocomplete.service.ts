import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AutocompleteService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(fields?: string) {
    if (!fields) return [];
    const response: any = {};

    const fieldsArray = fields.split(',');
    for (const field of fieldsArray) {
      switch (field) {
        case 'roles':
          response.roles = await this.prisma.role.findMany({
            select: {
              id: true,
              name: true,
              label: true,
            },
          });
          break;
        default:
          break;
      }
    }
    return response;
  }
}
