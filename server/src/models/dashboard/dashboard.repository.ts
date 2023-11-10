import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/database/prisma/prisma.service";

@Injectable()
export class DashboardRepository {
  constructor(private prisma: PrismaService) {}

  async getWeeklyPoints(params: {
    dateStart: Date;
    dateEnd: Date;
  }): Promise<{ points: number; pointsAverage: number }> {
    const { dateEnd, dateStart } = params;
    return this.prisma.$queryRaw`
      SELECT
          SUM(points) AS points,
          AVG(points) AS pointsAverage
      FROM (
          SELECT t."completedDate" as cdate, COALESCE(t.points, tc.points) as points
          FROM task t JOIN task_complexities tc ON t."complexId" = tc.id

          UNION ALL

          SELECT habit_tracking.date as cdate, points FROM habit_tracking
      ) AS combined_tables
      WHERE combined_tables.cdate BETWEEN ${dateStart} AND ${dateEnd};
    `;
  }
}
