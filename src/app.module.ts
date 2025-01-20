import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkedInService } from './linkedin/linkedin.service';
import { LinkedInController } from './linkedin/linkedin.controller';

@Module({
  imports: [],
  controllers: [AppController, LinkedInController],
  providers: [AppService, LinkedInService],
})
export class AppModule {}
