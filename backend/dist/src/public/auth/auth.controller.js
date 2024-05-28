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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const authenticate_dto_1 = require("./dto/authenticate.dto");
const auth_service_1 = require("./auth.service");
const authenticate_response_dto_1 = require("./dto/authenticate.response.dto");
const create_account_dto_1 = require("./dto/create-account.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    authenticate(body) {
        return this.authService.authenticate(body);
    }
    createSupporter(body) {
        return this.authService.createSupporter(body);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiResponse)({
        type: authenticate_response_dto_1.AuthenticateResponseDTO,
        status: 201,
        description: 'The user has been successfully authenticated.',
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Credenciais inválidas' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [authenticate_dto_1.AuthenticateDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "authenticate", null);
__decorate([
    (0, common_1.Post)('signUp'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateSupporterDTO]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createSupporter", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map