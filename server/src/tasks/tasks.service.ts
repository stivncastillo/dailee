import { Injectable } from "@nestjs/common";
import { Task } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { CreateTaskInput } from "./dto/create-task.input";
import { GetTaskComplexityArgs } from "./dto/get-task-complexity.args";
import { UpdateTaskInput } from "./dto/update-task.input";
import { TasksComplexity } from "./entities/task-complexity.entity";
import { TaskRepository } from "./tasks.repository";

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  public async create(createTaskData: CreateTaskInput): Promise<Task> {
    const habit = await this.taskRepository.createTask({
      data: {
        id: uuidv4(),
        ...createTaskData,
      },
    });

    return habit;
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

  findAll() {
    return `This action returns all tasks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskInput: UpdateTaskInput) {
    return `This action updates a #${id} ${updateTaskInput} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
