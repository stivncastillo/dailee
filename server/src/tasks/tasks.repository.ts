import { Injectable } from "@nestjs/common";
import { Prisma, Task, TasksComplexities } from "@prisma/client";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  async getTasks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TaskWhereUniqueInput;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput;
  }): Promise<Task[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.task.findMany({ skip, take, cursor, where, orderBy });
  }

  async createTask(params: {
    data: Prisma.TaskUncheckedCreateInput;
  }): Promise<Task> {
    const { data } = params;
    return this.prisma.task.create({ data });
  }

  // Complex
  async getComplexity(params: {
    where?: Prisma.TasksComplexitiesWhereUniqueInput;
  }): Promise<TasksComplexities> {
    const { where } = params;
    return this.prisma.tasksComplexities.findUnique({ where });
  }
}
