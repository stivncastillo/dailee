import { Injectable } from "@nestjs/common";
import { Prisma, HabitLog } from "@prisma/client";
import { PrismaService } from "src/common/database/prisma/prisma.service";

@Injectable()
export class HabitLogRepository {
  constructor(private prisma: PrismaService) {}

  async getOne(params: {
    where?: Prisma.HabitLogWhereUniqueInput;
  }): Promise<HabitLog> {
    const { where } = params;
    return this.prisma.habitLog.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HabitLogWhereUniqueInput;
    where?: Prisma.HabitLogWhereInput;
    orderBy?: Prisma.HabitLogOrderByWithRelationInput;
  }): Promise<HabitLog[]> {
    return this.prisma.habitLog.findMany(params);
  }

  async create(params: {
    data: Prisma.HabitLogCreateInput;
  }): Promise<HabitLog> {
    const { data } = params;
    return this.prisma.habitLog.create({ data });
  }

  async update(params: {
    where: Prisma.HabitLogWhereUniqueInput;
    data: Prisma.HabitLogUpdateInput;
  }): Promise<HabitLog> {
    const { where, data } = params;
    return this.prisma.habitLog.update({ where, data });
  }

  async delete(params: {
    where: Prisma.HabitLogWhereUniqueInput;
  }): Promise<HabitLog> {
    const { where } = params;
    return this.prisma.habitLog.delete({ where });
  }

  async deleteLastByHabitId(habit_id: string): Promise<HabitLog> {
    const lastRecord = await this.prisma.habitLog.findFirst({
      where: { habit_id },
      orderBy: { date: "desc" },
    });

    if (!lastRecord) {
      throw new Error("No record found for the given habit_id");
    }

    return this.prisma.habitLog.delete({ where: { id: lastRecord.id } });
  }

  async deleteMany(params: {
    where: Prisma.HabitLogWhereInput;
  }): Promise<Prisma.BatchPayload> {
    const { where } = params;
    return this.prisma.habitLog.deleteMany({ where });
  }

  async getCount(params: {
    where: Prisma.HabitLogWhereInput;
  }): Promise<number> {
    const { where } = params;
    return this.prisma.habitLog.count({ where });
  }
}
