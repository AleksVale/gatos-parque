"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRouteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_route_dto_1 = require("./create-route.dto");
class UpdateRouteDto extends (0, swagger_1.PartialType)(create_route_dto_1.CreateRouteDto) {
}
exports.UpdateRouteDto = UpdateRouteDto;
//# sourceMappingURL=update-route.dto.js.map