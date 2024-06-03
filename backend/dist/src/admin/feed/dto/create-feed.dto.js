"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFeedDto = exports.createFeedSchema = void 0;
const nestjs_zod_1 = require("nestjs-zod");
const z_1 = require("nestjs-zod/z");
const zodMessage_1 = require("../../../utils/zodMessage");
exports.createFeedSchema = z_1.z.object({
    title: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    description: z_1.z.string().min(1, { message: zodMessage_1.zodMessages.required }),
    photoKey: z_1.z.string().nullable().optional(),
});
class CreateFeedDto extends (0, nestjs_zod_1.createZodDto)(exports.createFeedSchema) {
}
exports.CreateFeedDto = CreateFeedDto;
//# sourceMappingURL=create-feed.dto.js.map