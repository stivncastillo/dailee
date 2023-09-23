import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async getUser(params: {
    where?: Prisma.UserWhereUniqueInput;
  }): Promise<User> {
    const { where } = params;
    return this.prisma.user.findUnique({ where });
  }

  // async getHabits(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.HabitWhereUniqueInput;
  //   where?: Prisma.HabitWhereInput;
  //   orderBy?: Prisma.HabitOrderByWithRelationInput;
  // }): Promise<Habit[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.habit.findMany({ skip, take, cursor, where, orderBy });
  // }

  async createUser(params: { data: Prisma.UserCreateInput }): Promise<User> {
    const { data } = params;
    return this.prisma.user.create({ data });
  }

  // async updateReview(params: {
  //   where: Prisma.HabitWhereUniqueInput;
  //   data: Prisma.HabitUpdateInput;
  // }): Promise<Habit> {
  //   const { where, data } = params;
  //   return this.prisma.habit.update({ where, data });
  // }

  // async deleteHabit(params: {
  //   where: Prisma.HabitWhereUniqueInput;
  // }): Promise<Habit> {
  //   const { where } = params;
  //   return this.prisma.habit.delete({ where });
  // }
}
