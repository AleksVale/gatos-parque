"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdoptionModule = void 0;
const common_1 = require("@nestjs/common");
const adoption_controller_1 = require("./adoption.controller");
const adoption_service_1 = require("./adoption.service");
const adoption_repository_1 = require("../../repositories/adoption.repository");
let AdoptionModule = class AdoptionModule {
};
exports.AdoptionModule = AdoptionModule;
exports.AdoptionModule = AdoptionModule = __decorate([
    (0, common_1.Module)({
        controllers: [adoption_controller_1.AdoptionController],
        providers: [adoption_service_1.AdoptionService, adoption_repository_1.AdoptionRepository],
    })
], AdoptionModule);
//# sourceMappingURL=adoption.module.js.map