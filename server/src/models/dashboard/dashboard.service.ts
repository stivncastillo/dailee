import { Injectable } from "@nestjs/common";

import { DashboardRepository } from "./dashboard.repository";
import { GetWeeklyPointsArgs } from "./dto/args/get-weekly-points";

@Injectable()
export class DashboardService {
  constructor(private dashboardRepository: DashboardRepository) {}

  public async getWeeklyPoints(params: GetWeeklyPointsArgs): Promise<{
    points: number;
    pointsAverage: number;
  }> {
    const { dateEnd, dateStart } = params;

    const weeklyPoints = await this.dashboardRepository.getWeeklyPoints({
      dateStart,
      dateEnd,
    });

    return {
      points: parseInt(weeklyPoints[0].points) || 0,
      pointsAverage: weeklyPoints[0].pointsaverage || 0,
    };
  }
}
