import { Module } from "@nestjs/common";
import { PrismaModule } from "src/common/database/prisma/prisma.module";

import { HabitsResolver } from "./habits.resolver";
import { HabitsService } from "./habits.service";
import { HabitRepository } from "./repositories/habits.repository";
import { UserModule } from "../user/user.module";

@Module({
  providers: [HabitsResolver, HabitsService, HabitRepository],
  imports: [PrismaModule, UserModule],
  exports: [HabitsService],
})
export class HabitsModule {}
