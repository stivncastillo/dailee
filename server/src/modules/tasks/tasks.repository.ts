import { Injectable } from "@nestjs/common";
import { Prisma, Task } from "@prisma/client";
import { PrismaService } from "src/common/database/prisma/prisma.service";

import { GetTasksArgs } from "./dto/args/get-tasks.args";

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async getOne(params: { where?: Prisma.TaskWhereUniqueInput }): Promise<Task> {
    const { where } = params;
    return this.prisma.task.findUnique({ where });
  }

  async getMany(params: GetTasksArgs): Promise<Task[]> {
    return this.prisma.task.findMany(params);
  }

  async create(params: {
    data: Prisma.TaskUncheckedCreateInput;
  }): Promise<Task> {
    const { data } = params;
    return this.prisma.task.create({ data });
  }

  async update(params: {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.TaskUpdateInput;
  }): Promise<Task> {
    const { where, data } = params;
    return this.prisma.task.update({ where, data });
  }

  async delete(params: { where: Prisma.TaskWhereUniqueInput }): Promise<Task> {
    const { where } = params;
    return this.prisma.task.delete({ where });
  }

  // // Complex
  // async getComplexity(params: {
  //   where?: Prisma.TasksComplexitiesWhereUniqueInput;
  // }): Promise<TasksComplexities> {
  //   const { where } = params;
  //   return this.prisma.tasksComplexities.findUnique({ where });
  // }

  // async getManyComplexities(
  //   params: Prisma.TasksComplexitiesFindManyArgs<DefaultArgs>,
  // ): Promise<TasksComplexities[]> {
  //   return this.prisma.tasksComplexities.findMany(params);
  // }
}
