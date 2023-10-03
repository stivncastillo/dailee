import { Inject } from "@nestjs/common";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { UserService } from "src/models/user/user.service";

import { CreateTaskInput } from "./dto/create-task.input";
import { GetTasksArgs } from "./dto/get-tasks.args";
import { UpdateTaskInput } from "./dto/update-task.input";
import { Task } from "./entities/task.entity";
import { TasksService } from "./tasks.service";

@Resolver(() => Task)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Inject(UserService)
  private readonly userService: UserService;

  @Query(() => [Task], { name: "tasks", nullable: false })
  getTasks(@Args() getTaskArgs: GetTasksArgs): Promise<Task[]> {
    console.log(
      "👻 ~ file: tasks.resolver.ts:28 ~ TasksResolver ~ getTasks ~ getTaskArgs:",
      getTaskArgs,
    );
    return this.tasksService.getTasks(getTaskArgs);
  }

  @Mutation(() => Task)
  createTask(@Args("createTaskInput") createTaskInput: CreateTaskInput) {
    return this.tasksService.create(createTaskInput);
  }

  // @Query(() => [Task], { name: "tasks" })
  // findAll() {
  //   return this.tasksService.findAll();
  // }

  @Query(() => Task, { name: "task" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  updateTask(@Args("updateTaskInput") updateTaskInput: UpdateTaskInput) {
    return this.tasksService.update(updateTaskInput.id, updateTaskInput);
  }

  @Mutation(() => Task)
  removeTask(@Args("id", { type: () => Int }) id: number) {
    return this.tasksService.remove(id);
  }

  // Resolvers
  @ResolveField()
  async userId(@Parent() task: Task) {
    const { userId } = task;
    return this.userService.getUser({ id: userId });
  }
  @ResolveField()
  async complexId(@Parent() task: Task) {
    const { complexId } = task;
    return this.tasksService.getTaskComplexity({ id: complexId });
  }
}