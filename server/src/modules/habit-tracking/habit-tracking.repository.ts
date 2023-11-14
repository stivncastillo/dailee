import { Injectable } from "@nestjs/common";
import { HabitTracking, Prisma } from "@prisma/client";
import { PrismaService } from "src/common/database/prisma/prisma.service";

type GetHabitTrackingAgregateParams = {
  where?: Prisma.HabitTrackingWhereInput;
  _sum?: Prisma.HabitTrackingSumAggregateInputType;
  _avg?: Prisma.HabitTrackingAvgAggregateInputType;
};
@Injectable()
export class HabitTrackingRepository {
  constructor(private prisma: PrismaService) {}

  async getOne(params: {
    where?: Prisma.HabitTrackingWhereUniqueInput;
  }): Promise<HabitTracking> {
    const { where } = params;
    return this.prisma.habitTracking.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HabitTrackingWhereUniqueInput;
    where?: Prisma.HabitTrackingWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput;
  }): Promise<HabitTracking[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.habitTracking.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async getFirst(params: {
    data: Prisma.HabitTrackingWhereInput;
  }): Promise<HabitTracking> {
    const { data } = params;
    return await this.prisma.habitTracking.findFirst({
      where: {
        habitId: { equals: data.habitId as string },
        date: { equals: data.date as string },
      },
    });
  }

  async create(params: {
    data: Prisma.HabitTrackingUncheckedCreateInput;
  }): Promise<HabitTracking> {
    const { data } = params;
    return this.prisma.habitTracking.create({ data });
  }

  async update(params: {
    where: Prisma.HabitTrackingWhereUniqueInput;
    data: Prisma.HabitTrackingUpdateInput;
  }): Promise<HabitTracking> {
    const { where, data } = params;
    return this.prisma.habitTracking.update({ where, data });
  }

  async delete(params: {
    where: Prisma.HabitTrackingWhereUniqueInput;
  }): Promise<HabitTracking> {
    const { where } = params;
    return this.prisma.habitTracking.delete({ where });
  }

  async getManyAggregate(
    params: GetHabitTrackingAgregateParams,
  ): Promise<
    Prisma.GetHabitTrackingAggregateType<GetHabitTrackingAgregateParams>
  > {
    const { _avg, _sum, where } = params;
    return this.prisma.habitTracking.aggregate({
      ...(_avg ? { _avg } : {}),
      ...(_sum ? { _sum } : {}),
      where,
    });
  }
}
