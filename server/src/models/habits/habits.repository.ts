import { Injectable } from "@nestjs/common";
import { Prisma, Habit } from "@prisma/client";
import { PrismaService } from "src/common/database/prisma/prisma.service";

@Injectable()
export class HabitRepository {
  constructor(private prisma: PrismaService) {}

  async getOne(params: {
    where?: Prisma.HabitWhereUniqueInput;
  }): Promise<Habit> {
    const { where } = params;
    return this.prisma.habit.findUnique({ where });
  }

  async getMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HabitWhereUniqueInput;
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput;
  }): Promise<Habit[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.habit.findMany({ skip, take, cursor, where, orderBy });
  }

  async create(params: { data: Prisma.HabitCreateInput }): Promise<Habit> {
    const { data } = params;
    return this.prisma.habit.create({ data });
  }

  async update(params: {
    where: Prisma.HabitWhereUniqueInput;
    data: Prisma.HabitUpdateInput;
  }): Promise<Habit> {
    const { where, data } = params;
    return this.prisma.habit.update({ where, data });
  }

  async delete(params: {
    where: Prisma.HabitWhereUniqueInput;
  }): Promise<Habit> {
    const { where } = params;
    return this.prisma.habit.delete({ where });
  }

  async deleteMany(params: {
    where: Prisma.HabitWhereInput;
  }): Promise<Prisma.BatchPayload> {
    const { where } = params;
    return this.prisma.habit.deleteMany({ where });
  }
}
