"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupporterModule = void 0;
const common_1 = require("@nestjs/common");
const supporter_service_1 = require("./supporter.service");
const supporter_controller_1 = require("./supporter.controller");
const user_repository_1 = require("../../repositories/user.repository");
let SupporterModule = class SupporterModule {
};
exports.SupporterModule = SupporterModule;
exports.SupporterModule = SupporterModule = __decorate([
    (0, common_1.Module)({
        controllers: [supporter_controller_1.SupporterController],
        providers: [supporter_service_1.SupporterService, user_repository_1.UserRepository],
    })
], SupporterModule);
//# sourceMappingURL=supporter.module.js.map