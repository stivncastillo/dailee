import { Injectable } from "@nestjs/common";
import { Task } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { GetTaskArgs } from "./dto/args/get-task.args";
import { GetTasksArgs } from "./dto/args/get-tasks.args";
import { CreateTaskInput } from "./dto/input/create-task.input";
import { UpdateTaskInput } from "./dto/input/update-task.input";
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
        user: {
          connect: {
            id: createData.userId,
          },
        },
        ...createData,
      },
    });
  }

  public async update(updateData: UpdateTaskInput) {
    const data = { ...updateData, completed_date: null };
    if (updateData.status === "done") {
      data.completed_date = new Date();
    }

    return await this.taskRepository.update({
      where: { id: updateData.id },
      data,
    });
  }

  public async delete(deleteData: GetTaskArgs): Promise<Task> {
    return await this.taskRepository.delete(deleteData);
  }
}
