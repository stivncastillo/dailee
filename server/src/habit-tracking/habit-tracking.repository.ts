import { Injectable } from '@nestjs/common';
import { HabitTracking, Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class HabitTrackingRepository {
  constructor(private prisma: PrismaService) {}

  async getHabitTracking(params: {
    where?: Prisma.HabitTrackingWhereUniqueInput;
  }): Promise<HabitTracking> {
    const { where } = params;
    return this.prisma.habitTracking.findUnique({ where });
  }

  async getHabitTrackings(params: {
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

  async createHabitTracking(params: {
    data: Prisma.HabitTrackingUncheckedCreateInput;
  }): Promise<HabitTracking> {
    const { data } = params;
    const ht = await this.prisma.habitTracking.findFirst({
      where: {
        habitId: { equals: data.habitId },
        date: { equals: data.date },
      },
    });

    if (ht) {
      return this.updateHabitTracking({ where: { id: ht.id }, data });
    }
    return this.prisma.habitTracking.create({ data });
  }

  async updateHabitTracking(params: {
    where: Prisma.HabitTrackingWhereUniqueInput;
    data: Prisma.HabitTrackingUpdateInput;
  }): Promise<HabitTracking> {
    const { where, data } = params;
    return this.prisma.habitTracking.update({ where, data });
  }

  async deleteHabitTracking(params: {
    where: Prisma.HabitTrackingWhereUniqueInput;
  }): Promise<HabitTracking> {
    const { where } = params;
    return this.prisma.habitTracking.delete({ where });
  }
}
