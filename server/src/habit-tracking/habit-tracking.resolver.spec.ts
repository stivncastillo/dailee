import { Test, TestingModule } from '@nestjs/testing';
import { HabitTrackingResolver } from './habit-tracking.resolver';
import { HabitTrackingService } from './habit-tracking.service';

describe('HabitTrackingResolver', () => {
  let resolver: HabitTrackingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HabitTrackingResolver, HabitTrackingService],
    }).compile();

    resolver = module.get<HabitTrackingResolver>(HabitTrackingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
