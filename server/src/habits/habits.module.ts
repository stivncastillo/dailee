import { Module } from "@nestjs/common";
import { PrismaModule } from "src/database/prisma/prisma.module";

import { HabitRepository } from "./habits.repository";
import { HabitsResolver } from "./habits.resolver";
import { HabitsService } from "./habits.service";

@Module({
  providers: [HabitsResolver, HabitsService, HabitRepository],
  imports: [PrismaModule],
  exports: [HabitsService],
})
export class HabitsModule {}
