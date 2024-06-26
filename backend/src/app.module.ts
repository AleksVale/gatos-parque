import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { PrismaModule } from './public/prisma/prisma.module';
import { UserModule } from './admin/user/user.module';
import { AuthModule } from './public/auth/auth.module';
import { AwsModule } from './public/aws/aws.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { LoggerModule } from './logger/logger.module';
import { AutocompleteModule } from './public/autocomplete/autocomplete.module';
import { FeedModule } from './admin/feed/feed.module';
import { CatsModule } from './admin/cats/cats.module';
import { SupporterModule } from './supporter/supporter/supporter.module';
import { AdoptionModule } from './admin/adoption/adoption.module';
import { VoluntaryModule } from './admin/voluntary/voluntary.module';
import { FeedModule as SupporterFeedModule } from './supporter/feed/feed.module';
import { PointsModule } from './admin/points/points.module';
import { RouteModule } from './admin/route/route.module';
import { RouteSupModule } from './supporter/route-sup/route-sup.module';
import { VoluntarySupModule } from './supporter/voluntary/voluntary.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 6000,
        limit: 10,
      },
    ]),
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    PrismaModule,
    UserModule,
    AuthModule,
    AwsModule,
    LoggerModule,
    AutocompleteModule,
    FeedModule,
    CatsModule,
    SupporterModule,
    AdoptionModule,
    VoluntaryModule,
    SupporterFeedModule,
    PointsModule,
    RouteModule,
    RouteSupModule,
    VoluntarySupModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
