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
exports.VoluntaryController = void 0;
const common_1 = require("@nestjs/common");
const voluntary_service_1 = require("./voluntary.service");
const create_voluntary_dto_1 = require("./dto/create-voluntary.dto");
const update_voluntary_dto_1 = require("./dto/update-voluntary.dto");
let VoluntaryController = class VoluntaryController {
    constructor(voluntaryService) {
        this.voluntaryService = voluntaryService;
    }
    create(createVoluntaryDto) {
        return this.voluntaryService.create(createVoluntaryDto);
    }
    findAll() {
        return this.voluntaryService.findAll();
    }
    findOne(id) {
        return this.voluntaryService.findOne(+id);
    }
    update(id, updateVoluntaryDto) {
        return this.voluntaryService.update(+id, updateVoluntaryDto);
    }
    remove(id) {
        return this.voluntaryService.remove(+id);
    }
};
exports.VoluntaryController = VoluntaryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_voluntary_dto_1.CreateVoluntaryDto]),
    __metadata("design:returntype", void 0)
], VoluntaryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VoluntaryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VoluntaryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_voluntary_dto_1.UpdateVoluntaryDto]),
    __metadata("design:returntype", void 0)
], VoluntaryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VoluntaryController.prototype, "remove", null);
exports.VoluntaryController = VoluntaryController = __decorate([
    (0, common_1.Controller)('voluntary'),
    __metadata("design:paramtypes", [voluntary_service_1.VoluntaryService])
], VoluntaryController);
//# sourceMappingURL=voluntary.controller.js.map