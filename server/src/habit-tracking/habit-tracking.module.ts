import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { HabitsModule } from 'src/habits/habits.module';
import { UserModule } from 'src/user/user.module';

import { HabitTrackingRepository } from './habit-tracking.repository';
import { HabitTrackingResolver } from './habit-tracking.resolver';
import { HabitTrackingService } from './habit-tracking.service';

@Module({
  providers: [
    HabitTrackingResolver,
    HabitTrackingService,
    HabitTrackingRepository,
  ],
  imports: [PrismaModule, UserModule, HabitsModule],
})
export class HabitTrackingModule {}
