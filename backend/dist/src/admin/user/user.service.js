"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../repositories/user.repository");
const client_1 = require("@prisma/client");
const validation_1 = require("../../utils/validation");
const bcrypt = require("bcrypt");
const dayjs = require("dayjs");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createSupporter(createUserDto) {
        const user = await this.findByEmail(createUserDto.email);
        if (user) {
            throw new common_1.BadRequestException('Email já cadastrado');
        }
        if (createUserDto.document &&
            !validation_1.Validator.validateCPF(createUserDto.document)) {
            throw new common_1.BadRequestException('CPF inválido');
        }
        const hashedPass = await bcrypt.hash(createUserDto.password, 10);
        await this.userRepository.create({
            ...createUserDto,
            password: hashedPass,
            role: {
                connect: { name: 'supporter' },
            },
        });
        return { success: true };
    }
    async create(createUserDto) {
        const user = await this.findByEmail(createUserDto.email);
        if (user) {
            throw new common_1.BadRequestException('Email já cadastrado');
        }
        if (createUserDto.document &&
            !validation_1.Validator.validateCPF(createUserDto.document)) {
            throw new common_1.BadRequestException('CPF inválido');
        }
        const hashedPass = await bcrypt.hash(createUserDto.password, 10);
        await this.userRepository.create({
            ...createUserDto,
            dateOfBirth: createUserDto.dateOfBirth
                ? new Date(createUserDto.dateOfBirth)
                : undefined,
            password: hashedPass,
        });
        return { success: true };
    }
    update(id, updateUserDto) {
        return this.userRepository.update({
            ...updateUserDto,
            dateOfBirth: dayjs(updateUserDto.dateOfBirth).toDate(),
        }, { id });
    }
    findByEmail(email) {
        return this.userRepository.findByEmail(email);
    }
    findAll(options) {
        return this.userRepository.findAll(options);
    }
    async findOne(id) {
        const user = await this.userRepository.find({
            id,
        });
        if (!user)
            throw new common_1.BadRequestException('Usuário não encontrado');
        return user;
    }
    remove(id) {
        return this.userRepository.update({ status: client_1.UserStatus.BLOCKED }, { id });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
//# sourceMappingURL=user.service.js.map