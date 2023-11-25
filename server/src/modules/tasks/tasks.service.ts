import { Injectable } from "@nestjs/common";
import { Task } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { GetTaskComplexityArgs } from "./dto/args/get-task-complexity.args";
import { GetTaskArgs } from "./dto/args/get-task.args";
import { GetTasksArgs } from "./dto/args/get-tasks.args";
import { CreateTaskInput } from "./dto/input/create-task.input";
import { UpdateTaskInput } from "./dto/input/update-task.input";
import { TasksComplexity } from "./entities/task-complexity.entity";
import { TaskRepository } from "./tasks.repository";

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  public async getOne(getTaskArgs: GetTaskArgs) {
    return await this.taskRepository.getOne(getTaskArgs);
  }

  public async getMany(getTasksArgs: GetTasksArgs): Promise<Task[]> {
    return await this.taskRepository.getMany(getTasksArgs);
  }

  public async create(
    createData: CreateTaskInput & { userId: string },
  ): Promise<Task> {
    return await this.taskRepository.create({
      data: {
        id: uuidv4(),
        ...createData,
      },
    });
  }

  public async update(updateData: UpdateTaskInput) {
    const data = { ...updateData, completedDate: null };
    if (updateData.status === "done") {
      data.completedDate = new Date();
    }

    return await this.taskRepository.update({
      where: { id: updateData.id },
      data,
    });
  }

  public async delete(deleteData: GetTaskArgs): Promise<Task> {
    return await this.taskRepository.delete(deleteData);
  }

  // Complex
  public async getTaskComplexity(
    getTaskComplexityArgs: GetTaskComplexityArgs,
  ): Promise<TasksComplexity> {
    return await this.taskRepository.getComplexity({
      where: {
        id: getTaskComplexityArgs.id,
      },
    });
  }

  public async getManyComplexities(): Promise<TasksComplexity[]> {
    return await this.taskRepository.getManyComplexities({
      where: {
        points: {
          not: null,
        },
      },
    });
  }
}
