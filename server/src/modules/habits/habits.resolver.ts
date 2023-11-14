import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { CreateHabitInput } from "./dto/create-habit.input";
import { DeleteHabitInput } from "./dto/delete-habit.input";
import { DeleteHabitsInput } from "./dto/delete-habits.input";
import { GetHabitArgs } from "./dto/get-habit.args";
import { GetHabitsArgs } from "./dto/get-habits.args";
import { UpdateHabitInput } from "./dto/update-habit.input";
import { Habit } from "./entities/habit.entity";
import { HabitsService } from "./habits.service";

@Resolver(() => Habit)
export class HabitsResolver {
  constructor(private readonly habitsService: HabitsService) {}

  // Queries
  @Query(() => [Habit], { name: "habits", nullable: false })
  getHabits(@Args() getHabitsArgs: GetHabitsArgs): Promise<Habit[]> {
    return this.habitsService.getMany(getHabitsArgs);
  }

  @Query(() => Habit, { name: "habit", nullable: false })
  getHabit(@Args() getHabitArgs: GetHabitArgs): Promise<Habit> {
    return this.habitsService.getOne(getHabitArgs);
  }

  // Mutations
  @Mutation(() => Habit)
  createHabit(
    @Args("createHabitInput") createHabitInput: CreateHabitInput,
  ): Promise<Habit> {
    return this.habitsService.create(createHabitInput);
  }

  @Mutation(() => Habit)
  updateHabit(@Args("updateHabitInput") updateHabitInput: UpdateHabitInput) {
    return this.habitsService.update(updateHabitInput);
  }

  @Mutation(() => Habit)
  async deleteHabit(
    @Args("deleteHabitInput") deleteHabitInput: DeleteHabitInput,
  ): Promise<Habit> {
    return this.habitsService.delete(deleteHabitInput);
  }

  @Mutation(() => Number)
  async deleteHabits(
    @Args("deleteHabitsInput") deleteHabitsInput: DeleteHabitsInput,
  ): Promise<number> {
    return await this.habitsService.deleteMany(deleteHabitsInput);
  }
}
