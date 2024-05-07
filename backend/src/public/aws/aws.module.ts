import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AwsService } from './aws.service';

@Module({
  controllers: [],
  providers: [ConfigService, AwsService],
  exports: [AwsService],
})
export class AwsModule {}
