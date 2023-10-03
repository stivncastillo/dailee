import { Module } from "@nestjs/common";
import { PrismaModule } from "src/common/database/prisma/prisma.module";
import { UserModule } from "src/models/user/user.module";

import { TaskRepository } from "./tasks.repository";
import { TasksResolver } from "./tasks.resolver";
import { TasksService } from "./tasks.service";

@Module({
  providers: [TasksResolver, TasksService, TaskRepository],
  imports: [PrismaModule, UserModule],
})
export class TasksModule {}
