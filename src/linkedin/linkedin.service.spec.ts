import { Test, TestingModule } from '@nestjs/testing';
import { LinkedInService } from './linkedin.service';

describe('LinkedInService', () => {
  let service: LinkedInService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkedInService],
    }).compile();

    service = module.get<LinkedInService>(LinkedInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
