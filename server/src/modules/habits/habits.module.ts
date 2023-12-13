import { Module } from "@nestjs/common";
import { PrismaModule } from "src/common/database/prisma/prisma.module";

import { HabitLogsResolver } from "./habit-logs.resolver";
import { HabitLogsService } from "./habit-logs.service";
import { HabitsResolver } from "./habits.resolver";
import { HabitsService } from "./habits.service";
import { HabitLogRepository } from "./repositories/habit-logs.repository";
import { HabitRepository } from "./repositories/habits.repository";
import { UserModule } from "../user/user.module";

@Module({
  providers: [
    HabitsResolver,
    HabitsService,
    HabitRepository,
    HabitLogsResolver,
    HabitLogsService,
    HabitLogRepository,
  ],
  imports: [PrismaModule, UserModule],
  exports: [HabitsService],
})
export class HabitsModule {}
