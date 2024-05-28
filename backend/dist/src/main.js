"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const nestjs_zod_1 = require("nestjs-zod");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const logger_service_1 = require("./logger/logger.service");
const filter_1 = require("./public/filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: new logger_service_1.LoggerService(),
    });
    const configService = app.get(config_1.ConfigService);
    (0, nestjs_zod_1.patchNestJsSwagger)();
    const config = new swagger_1.DocumentBuilder()
        .setTitle('SOSGatinhosDoParque')
        .setDescription('Uma api para gatinhos do parque')
        .setVersion('1.0')
        .addTag('GatosDoParque')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    app.useGlobalFilters(new filter_1.AllExceptionsFilter(app.get(core_1.HttpAdapterHost)));
    app.setGlobalPrefix('api');
    app.enableCors();
    const port = configService.get('PORT', { infer: true });
    await app.listen(port);
    common_1.Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map