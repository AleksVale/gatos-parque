"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCheckinDto = exports.createCheckin = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const zodMessage_1 = require("../../../utils/zodMessage");
const z_1 = require("nestjs-zod/z");
exports.createCheckin = z_1.z.object({
    routeId: z_1.z.number({ required_error: zodMessage_1.zodMessages.required }),
    pointId: z_1.z.number({ required_error: zodMessage_1.zodMessages.required }),
});
class CreateCheckinDto extends (0, nestjs_zod_1.createZodDto)(exports.createCheckin) {
}
exports.CreateCheckinDto = CreateCheckinDto;
//# sourceMappingURL=create-checkin.dto.js.map