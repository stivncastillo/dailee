import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HabitsService } from './habits.service';
import { Habit } from './entities/habit.entity';
import { CreateHabitInput } from './dto/create-habit.input';
import { UpdateHabitInput } from './dto/update-habit.input';
import { GetHabitsArgs } from './dto/get-habits.args';
import { GetHabitArgs } from './dto/get-habit.args';

@Resolver(() => Habit)
export class HabitsResolver {
  constructor(private readonly habitsService: HabitsService) {}

  @Query(() => [Habit], { name: 'habits', nullable: false })
  async findAll(@Args() getHabitsArgs: GetHabitsArgs): Promise<Habit[]> {
    return this.habitsService.findAll(getHabitsArgs);
  }

  @Query(() => Habit, { name: 'habit', nullable: false })
  findOne(@Args() getHabitArgs: GetHabitArgs): Promise<Habit> {
    return this.habitsService.findOne(getHabitArgs);
  }

  @Mutation(() => Habit)
  createHabit(
    @Args('createHabitInput') createHabitInput: CreateHabitInput,
  ): Promise<Habit> {
    return this.habitsService.create(createHabitInput);
  }

  @Mutation(() => Habit)
  updateHabit(@Args('updateHabitInput') updateHabitInput: UpdateHabitInput) {
    return this.habitsService.update(updateHabitInput);
  }

  @Mutation(() => Habit)
  removeHabit(@Args('id', { type: () => Int }) id: number) {
    return this.habitsService.remove(id);
  }
}
