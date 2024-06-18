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
exports.RouteResponseDto = exports.RoutePointResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class RoutePointResponseDto {
}
exports.RoutePointResponseDto = RoutePointResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RoutePointResponseDto.prototype, "routeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], RoutePointResponseDto.prototype, "pointId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RoutePointResponseDto.prototype, "checkin", void 0);
class RouteResponseDto {
}
exports.RouteResponseDto = RouteResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], RouteResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RouteResponseDto.prototype, "monday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RouteResponseDto.prototype, "tuesday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RouteResponseDto.prototype, "wednesday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RouteResponseDto.prototype, "thursday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RouteResponseDto.prototype, "friday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RouteResponseDto.prototype, "saturday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], RouteResponseDto.prototype, "sunday", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RoutePointResponseDto], isArray: true }),
    __metadata("design:type", Array)
], RouteResponseDto.prototype, "RoutePoint", void 0);
//# sourceMappingURL=route-response.dto.js.map