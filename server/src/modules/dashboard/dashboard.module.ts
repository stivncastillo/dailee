import { Module } from "@nestjs/common";
import { PrismaModule } from "src/common/database/prisma/prisma.module";

import { DashboardRepository } from "./dashboard.repository";
import { DashboardResolver } from "./dashboard.resolver";
import { DashboardService } from "./dashboard.service";

@Module({
  providers: [DashboardResolver, DashboardService, DashboardRepository],
  imports: [PrismaModule],
})
export class DashboardModule {}
