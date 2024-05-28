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
exports.AutocompleteResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class AutocompleteResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], AutocompleteResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AutocompleteResponse.prototype, "label", void 0);
class AutocompleteResponseDto {
}
exports.AutocompleteResponseDto = AutocompleteResponseDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: AutocompleteResponse,
        isArray: true,
    }),
    __metadata("design:type", Array)
], AutocompleteResponseDto.prototype, "roles", void 0);
//# sourceMappingURL=autocomplete-response.dto.js.map