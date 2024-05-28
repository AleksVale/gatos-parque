"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiOkResponsePaginated = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const pagination_dto_1 = require("../../utils/dto/pagination.dto");
const ApiOkResponsePaginated = (dataDto) => (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(pagination_dto_1.PaginatedResponseDto, dataDto), (0, swagger_1.ApiOkResponse)({
    schema: {
        allOf: [
            { $ref: (0, swagger_1.getSchemaPath)(pagination_dto_1.PaginatedResponseDto) },
            {
                properties: {
                    data: {
                        type: 'array',
                        items: { $ref: (0, swagger_1.getSchemaPath)(dataDto) },
                    },
                },
            },
        ],
    },
}));
exports.ApiOkResponsePaginated = ApiOkResponsePaginated;
//# sourceMappingURL=paginatedResponse.js.map