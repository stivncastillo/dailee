import { Injectable } from "@nestjs/common";
import { Prisma, Habit } from "@prisma/client";
import { PrismaService } from "src/common/database/prisma/prisma.service";

import { GetHabitsArgs } from "../dto/args/get-habits.args";

@Injectable()
export class HabitRepository {
  constructor(private prisma: PrismaService) {}

  async getOne(params: {
    where?: Prisma.HabitWhereUniqueInput;
  }): Promise<Habit> {
    const { where } = params;
    return this.prisma.habit.findUnique({ where });
  }

  async getMany(params: GetHabitsArgs): Promise<Habit[]> {
    return this.prisma.habit.findMany(params);
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
