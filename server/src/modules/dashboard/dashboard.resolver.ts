import { Args, Query, Resolver } from "@nestjs/graphql";

import { DashboardService } from "./dashboard.service";
import { GetWeeklyPointsArgs } from "./dto/args/get-weekly-points";
import { WeeklyPoints } from "./entities/weekly-points.entity";

@Resolver()
export class DashboardResolver {
  constructor(private readonly dashboardService: DashboardService) {}

  @Query(() => WeeklyPoints)
  getWeeklyPoints(@Args() getWeeklyPointsArgs: GetWeeklyPointsArgs) {
    return this.dashboardService.getWeeklyPoints({
      dateStart: getWeeklyPointsArgs.dateStart,
      dateEnd: getWeeklyPointsArgs.dateEnd,
    });
  }
}

// 7
