import { Inject } from "@nestjs/common";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";

import { GetHabitLogArgs } from "./dto/args/get-habit-log.args";
import { GetHabitLogsArgs } from "./dto/args/get-habits-logs";
import { CreateHabitLogInput } from "./dto/input/create-habit-log.input";
import { DeleteHabitLogInput } from "./dto/input/delete-habit-log.input";
import { DeleteManyInput } from "./dto/input/delete-many.input";
import { UpdateHabitLogInput } from "./dto/input/update-habit-log.input";
import { HabitLog } from "./entities/habit-log.entity";
import { HabitLogsService } from "./habit-logs.service";
import { HabitsService } from "./habits.service";

@Resolver(() => HabitLog)
export class HabitLogsResolver {
  constructor(private readonly habitLogsService: HabitLogsService) {}

  @Inject(HabitsService)
  private readonly habitService: HabitsService;

  // Queries
  @Query(() => [HabitLog], { name: "habitLogs", nullable: false })
  getHabitLogs(
    @Args() getHabitLogsArgs: GetHabitLogsArgs,
  ): Promise<HabitLog[]> {
    return this.habitLogsService.getMany({ ...getHabitLogsArgs });
  }

  @Query(() => HabitLog, { name: "habitLog", nullable: false })
  getHabitLog(@Args() getHabitLogArgs: GetHabitLogArgs): Promise<HabitLog> {
    return this.habitLogsService.getOne(getHabitLogArgs);
  }

  // Mutations
  @Mutation(() => HabitLog)
  createHabitLog(
    @Args("createHabitLogInput") createHabitLogInput: CreateHabitLogInput,
  ): Promise<HabitLog> {
    return this.habitLogsService.create({ ...createHabitLogInput });
  }

  @Mutation(() => HabitLog)
  updateHabitLog(
    @Args("updateHabitLogInput") updateHabitLogInput: UpdateHabitLogInput,
  ) {
    return this.habitLogsService.update(updateHabitLogInput);
  }

  @Mutation(() => HabitLog)
  async deleteHabitLog(
    @Args("deleteHabitLogInput") deleteHabitLogInput: DeleteHabitLogInput,
  ): Promise<HabitLog> {
    return this.habitLogsService.delete(deleteHabitLogInput);
  }

  @Mutation(() => Number)
  async deleteHabitLogs(
    @Args("deleteHabitLogsInput") deleteHabitLogsInput: DeleteManyInput,
  ): Promise<number> {
    return await this.habitLogsService.deleteMany(deleteHabitLogsInput);
  }

  // Resolvers
  @ResolveField()
  async habit_id(@Parent() habitLog: HabitLog) {
    const { habit_id } = habitLog;
    return this.habitService.getOne({
      where: {
        id: habit_id,
      },
    });
  }
}
