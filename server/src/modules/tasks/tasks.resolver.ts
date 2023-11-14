import { Inject } from "@nestjs/common";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { TasksComplexities } from "@prisma/client";
import { UserService } from "src/modules/user/user.service";

import { GetTaskArgs } from "./dto/args/get-task.args";
import { GetTasksArgs } from "./dto/args/get-tasks.args";
import { CreateTaskInput } from "./dto/input/create-task.input";
import { UpdateTaskInput } from "./dto/input/update-task.input";
import { TasksComplexity } from "./entities/task-complexity.entity";
import { Task } from "./entities/task.entity";
import { TasksService } from "./tasks.service";

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Inject(UserService)
  private readonly userService: UserService;

  // Queries
  @Query(() => [Task], { name: "tasks", nullable: false })
  getTasks(@Args() getTaskArgs: GetTasksArgs): Promise<Task[]> {
    return this.tasksService.getMany(getTaskArgs);
  }

  @Query(() => Task, { name: "task", nullable: false })
  getTask(@Args() getTaskArgs: GetTaskArgs): Promise<Task> {
    return this.tasksService.getOne(getTaskArgs);
  }

  @Query(() => [TasksComplexity], { name: "taskComplexities", nullable: false })
  getTaskComplexities(): Promise<TasksComplexities[]> {
    return this.tasksService.getManyComplexities();
  }

  // Mutations
  @Mutation(() => Task)
  createTask(@Args("createTaskInput") createTaskInput: CreateTaskInput) {
    return this.tasksService.create(createTaskInput);
  }

  @Mutation(() => Task)
  updateTask(@Args("updateTaskInput") updateTaskInput: UpdateTaskInput) {
    return this.tasksService.update(updateTaskInput);
  }

  @Mutation(() => Task)
  deleteTask(@Args() getTaskArgs: GetTaskArgs) {
    return this.tasksService.delete(getTaskArgs);
  }

  // Resolvers
  @ResolveField()
  async userId(@Parent() task: Task) {
    const { userId } = task;
    return this.userService.getOne({ id: userId });
  }

  @ResolveField()
  async complexId(@Parent() task: Task) {
    const { complexId } = task;
    return this.tasksService.getTaskComplexity({ id: complexId });
  }
}
