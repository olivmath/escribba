import { Controller, Get, Query, Logger } from '@nestjs/common';
import { LinkedInService } from './linkedin.service';

@Controller('linkedin')
export class LinkedInController {
  private readonly logger = new Logger(LinkedInController.name);

  constructor(private readonly linkedInService: LinkedInService) {}

  @Get('me')
  getUserInfo() {
    this.logger.log('Get User Details');

    return this.linkedInService.getUserProfile();
  }
}
