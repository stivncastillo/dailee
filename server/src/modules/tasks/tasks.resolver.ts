import { Inject } from "@nestjs/common";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { UserService } from "src/modules/user/user.service";

import { GetTaskArgs } from "./dto/args/get-task.args";
import { GetTasksArgs } from "./dto/args/get-tasks.args";
import { CreateTaskInput } from "./dto/input/create-task.input";
import { UpdateTaskInput } from "./dto/input/update-task.input";
import { Task } from "./entities/task.entity";
import { TasksService } from "./tasks.service";
import { CurrentUserId } from "../auth/decorators/currentUserId.decorator";

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Inject(UserService)
  private readonly userService: UserService;

  // Queries
  @Query(() => [Task], { name: "tasks", nullable: false })
  getTasks(
    @CurrentUserId() userId: string,
    @Args() getTaskArgs: GetTasksArgs,
  ): Promise<Task[]> {
    const where = { ...getTaskArgs.where, userId: { equals: userId } };
    return this.tasksService.getMany({ ...getTaskArgs, where });
  }

  @Query(() => Task, { name: "task", nullable: false })
  getTask(@Args() getTaskArgs: GetTaskArgs): Promise<Task> {
    return this.tasksService.getOne(getTaskArgs);
  }

  // Mutations
  @Mutation(() => Task)
  createTask(
    @CurrentUserId() userId: string,
    @Args("createTaskInput") createTaskInput: CreateTaskInput,
  ) {
    return this.tasksService.create({ userId, ...createTaskInput });
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
  async user_id(@Parent() task: Task) {
    const { user_id } = task;
    return this.userService.getOne({
      where: {
        id: user_id,
      },
    });
  }
}
