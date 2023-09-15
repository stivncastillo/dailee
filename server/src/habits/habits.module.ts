import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsResolver } from './habits.resolver';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { HabitRepository } from './habits.repository';

@Module({
  providers: [HabitsResolver, HabitsService, HabitRepository],
  imports: [PrismaModule],
})
export class HabitsModule {}
