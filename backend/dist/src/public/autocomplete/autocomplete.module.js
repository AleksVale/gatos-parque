"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteModule = void 0;
const common_1 = require("@nestjs/common");
const autocomplete_service_1 = require("./autocomplete.service");
const autocomplete_controller_1 = require("./autocomplete.controller");
let AutocompleteModule = class AutocompleteModule {
};
exports.AutocompleteModule = AutocompleteModule;
exports.AutocompleteModule = AutocompleteModule = __decorate([
    (0, common_1.Module)({
        controllers: [autocomplete_controller_1.AutocompleteController],
        providers: [autocomplete_service_1.AutocompleteService],
    })
], AutocompleteModule);
//# sourceMappingURL=autocomplete.module.js.map