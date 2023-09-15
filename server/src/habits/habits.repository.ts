import { Injectable } from '@nestjs/common';
import { Prisma, Habit } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class HabitRepository {
  constructor(private prisma: PrismaService) {}

  async getHabit(params: {
    where?: Prisma.HabitWhereUniqueInput;
  }): Promise<Habit> {
    const { where } = params;
    return this.prisma.habit.findUnique({ where });
  }

  async getHabits(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HabitWhereUniqueInput;
    where?: Prisma.HabitWhereInput;
    orderBy?: Prisma.HabitOrderByWithRelationInput;
  }): Promise<Habit[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.habit.findMany({ skip, take, cursor, where, orderBy });
  }

  async createHabit(params: { data: Prisma.HabitCreateInput }): Promise<Habit> {
    const { data } = params;
    return this.prisma.habit.create({ data });
  }

  async updateReview(params: {
    where: Prisma.HabitWhereUniqueInput;
    data: Prisma.HabitUpdateInput;
  }): Promise<Habit> {
    const { where, data } = params;
    return this.prisma.habit.update({ where, data });
  }
}
