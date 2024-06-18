/// <reference types="multer" />
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/env';
import { S3Client } from '@aws-sdk/client-s3';
interface ICreateCheckInPhotoKey {
    userId: string;
    routeId: number;
    pointId: number;
    extension: string;
}
export declare class AwsService {
    private readonly configService;
    constructor(configService: ConfigService<Env, true>);
    bucketName: string;
    s3: S3Client;
    updatePhoto(photo: Express.Multer.File, photoKey: string): Promise<import("@aws-sdk/client-s3").PutObjectCommandOutput>;
    getStoredObject(photoKey: string): Promise<string>;
    createCheckInPhotoKey({ extension, pointId, routeId, userId, }: ICreateCheckInPhotoKey): string;
}
export {};
