"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const env_1 = require("./env");
const core_1 = require("@nestjs/core");
const nestjs_zod_1 = require("nestjs-zod");
const prisma_module_1 = require("./public/prisma/prisma.module");
const user_module_1 = require("./admin/user/user.module");
const auth_module_1 = require("./public/auth/auth.module");
const aws_module_1 = require("./public/aws/aws.module");
const throttler_1 = require("@nestjs/throttler");
const logger_module_1 = require("./logger/logger.module");
const autocomplete_module_1 = require("./public/autocomplete/autocomplete.module");
const feed_module_1 = require("./admin/feed/feed.module");
const cats_module_1 = require("./admin/cats/cats.module");
const supporter_module_1 = require("./supporter/supporter/supporter.module");
const adoption_module_1 = require("./admin/adoption/adoption.module");
const voluntary_module_1 = require("./admin/voluntary/voluntary.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot([
                {
                    ttl: 6000,
                    limit: 10,
                },
            ]),
            config_1.ConfigModule.forRoot({
                validate: (env) => env_1.envSchema.parse(env),
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            aws_module_1.AwsModule,
            logger_module_1.LoggerModule,
            autocomplete_module_1.AutocompleteModule,
            feed_module_1.FeedModule,
            cats_module_1.CatsModule,
            supporter_module_1.SupporterModule,
            adoption_module_1.AdoptionModule,
            voluntary_module_1.VoluntaryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_PIPE,
                useClass: nestjs_zod_1.ZodValidationPipe,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map