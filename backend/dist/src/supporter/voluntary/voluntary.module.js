"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoluntarySupModule = void 0;
const common_1 = require("@nestjs/common");
const voluntary_controller_1 = require("./voluntary.controller");
const voluntary_service_1 = require("./voluntary.service");
const voluntary_repository_1 = require("../../repositories/voluntary.repository");
let VoluntarySupModule = class VoluntarySupModule {
};
exports.VoluntarySupModule = VoluntarySupModule;
exports.VoluntarySupModule = VoluntarySupModule = __decorate([
    (0, common_1.Module)({
        controllers: [voluntary_controller_1.VoluntaryController],
        providers: [voluntary_service_1.VoluntaryService, voluntary_repository_1.VoluntaryRepository],
    })
], VoluntarySupModule);
//# sourceMappingURL=voluntary.module.js.map