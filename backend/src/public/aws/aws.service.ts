import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Env } from 'src/env';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class AwsService {
  constructor(private readonly configService: ConfigService<Env, true>) {}

  //TODO CONFIGURAR O BUCKET E O S3 CLIENT
  bucketName: string = this.configService.get('BUCKET');
  s3 = new S3Client({
    region: 'auto',
    endpoint: 'a configurar',
    credentials: {
      accessKeyId: this.configService.get('ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get('SECRET_ACCESS_KEY'),
    },
  });
  async updatePhoto(photo: Express.Multer.File, photoKey: string) {
    const uploadResult = await this.s3.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: photoKey,
        Body: photo.buffer,
      }),
    );
    return uploadResult;
  }

  async getStoredObject(photoKey: string) {
    const uploadResult = await getSignedUrl(
      this.s3,
      new GetObjectCommand({
        Bucket: this.bucketName,
        Key: photoKey,
      }),
      { expiresIn: 3600 },
    );
    return uploadResult;
  }
}
