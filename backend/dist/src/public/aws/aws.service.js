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
exports.AwsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
let AwsService = class AwsService {
    constructor(configService) {
        this.configService = configService;
        this.bucketName = this.configService.get('BUCKET');
        this.s3 = new client_s3_1.S3Client({
            region: 'auto',
            endpoint: 'a configurar',
            credentials: {
                accessKeyId: this.configService.get('ACCESS_KEY_ID'),
                secretAccessKey: this.configService.get('SECRET_ACCESS_KEY'),
            },
        });
    }
    async updatePhoto(photo, photoKey) {
        const uploadResult = await this.s3.send(new client_s3_1.PutObjectCommand({
            Bucket: this.bucketName,
            Key: photoKey,
            Body: photo.buffer,
        }));
        return uploadResult;
    }
    async getStoredObject(photoKey) {
        const uploadResult = await (0, s3_request_presigner_1.getSignedUrl)(this.s3, new client_s3_1.GetObjectCommand({
            Bucket: this.bucketName,
            Key: photoKey,
        }), { expiresIn: 3600 });
        return uploadResult;
    }
};
exports.AwsService = AwsService;
exports.AwsService = AwsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AwsService);
//# sourceMappingURL=aws.service.js.map