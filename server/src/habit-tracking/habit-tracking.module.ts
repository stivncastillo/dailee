import { Module } from '@nestjs/common';
import { HabitTrackingService } from './habit-tracking.service';
import { HabitTrackingResolver } from './habit-tracking.resolver';

@Module({
  providers: [HabitTrackingResolver, HabitTrackingService],
})
export class HabitTrackingModule {}
