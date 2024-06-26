import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Env } from './env';
import { patchNestJsSwagger } from 'nestjs-zod';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { LoggerService } from './logger/logger.service';
import { AllExceptionsFilter } from './public/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });
  const configService = app.get<ConfigService<Env, true>>(ConfigService);
  patchNestJsSwagger();

  const config = new DocumentBuilder()
    .setTitle('SOSGatinhosDoParque')
    .setDescription('Uma api para gatinhos do parque')
    .setVersion('1.0')
    .addTag('GatosDoParque')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));

  app.setGlobalPrefix('api');

  app.enableCors();

  const port = configService.get('PORT', { infer: true });
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
