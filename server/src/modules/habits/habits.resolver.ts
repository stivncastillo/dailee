import { Inject } from "@nestjs/common";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";

import { GetHabitArgs } from "./dto/args/get-habit.args";
import { GetHabitsArgs } from "./dto/args/get-habits.args";
import { CreateHabitInput } from "./dto/input/create-habit.input";
import { DeleteManyInput } from "./dto/input/delete-many.input";
import { DeleteInput } from "./dto/input/delete.input";
import { UpdateHabitInput } from "./dto/input/update-habit.input";
import { Habit } from "./entities/habit.entity";
import { HabitsService } from "./habits.service";
import { CurrentUserId } from "../auth/decorators/currentUserId.decorator";
import { UserService } from "../user/user.service";

@Resolver(() => Habit)
export class HabitsResolver {
  constructor(private readonly habitsService: HabitsService) {}

  @Inject(UserService)
  private readonly userService: UserService;

  // Queries
  @Query(() => [Habit], { name: "habits", nullable: false })
  getHabits(
    @CurrentUserId() userId: string,
    @Args() getHabitsArgs: GetHabitsArgs,
  ): Promise<Habit[]> {
    const { where, ...rest } = getHabitsArgs;
    const whereUser = { ...where, user_id: { equals: userId } };
    return this.habitsService.getMany({ where: whereUser, ...rest });
  }

  @Query(() => Habit, { name: "habit", nullable: false })
  getHabit(@Args() getHabitArgs: GetHabitArgs): Promise<Habit> {
    return this.habitsService.getOne(getHabitArgs);
  }

  // Mutations
  @Mutation(() => Habit)
  createHabit(
    @CurrentUserId() userId: string,
    @Args("createHabitInput") createHabitInput: CreateHabitInput,
  ): Promise<Habit> {
    return this.habitsService.create({ userId, ...createHabitInput });
  }

  @Mutation(() => Habit)
  updateHabit(@Args("updateHabitInput") updateHabitInput: UpdateHabitInput) {
    return this.habitsService.update(updateHabitInput);
  }

  @Mutation(() => Habit)
  async deleteHabit(
    @Args("deleteHabitInput") deleteHabitInput: DeleteInput,
  ): Promise<Habit> {
    return this.habitsService.delete(deleteHabitInput);
  }

  @Mutation(() => Number)
  async deleteHabits(
    @Args("deleteHabitsInput") deleteHabitsInput: DeleteManyInput,
  ): Promise<number> {
    return await this.habitsService.deleteMany(deleteHabitsInput);
  }

  // Resolvers
  @ResolveField()
  async user_id(@Parent() habit: Habit) {
    const { user_id } = habit;
    return this.userService.getOne({
      where: {
        id: user_id,
      },
    });
  }
}
