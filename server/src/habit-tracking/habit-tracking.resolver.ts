import { Inject } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { HabitsService } from 'src/habits/habits.service';
import { UserService } from 'src/user/user.service';

import { CreateHabitTrackingInput } from './dto/create-habit-tracking.input';
import { GetHabitTrackingArgs } from './dto/get-habit-trackings.args';
import { UpdateHabitTrackingInput } from './dto/update-habit-tracking.input';
import { HabitTracking } from './entities/habit-tracking.entity';
import { HabitTrackingService } from './habit-tracking.service';

@Resolver(() => HabitTracking)
export class HabitTrackingResolver {
  @Inject(UserService)
  private readonly userService: UserService;

  @Inject(HabitsService)
  private readonly habitService: HabitsService;

  constructor(private readonly habitTrackingService: HabitTrackingService) {}

  @Mutation(() => HabitTracking)
  createHabitTracking(
    @Args('createHabitTrackingInput')
    createHabitTrackingInput: CreateHabitTrackingInput,
  ) {
    return this.habitTrackingService.create(createHabitTrackingInput);
  }

  @ResolveField()
  async userId(@Parent() habitTracking: HabitTracking) {
    const { userId } = habitTracking;
    return this.userService.getUser({ id: userId });
  }

  @ResolveField()
  async habitId(@Parent() habitTracking: HabitTracking) {
    const { habitId } = habitTracking;
    return this.habitService.getHabit({ id: habitId });
  }

  @Query(() => [HabitTracking], { name: 'habitTrackings' })
  getHabitsTracking(@Args() getHabitTrackingArgs: GetHabitTrackingArgs) {
    return this.habitTrackingService.getHabitsTracking(getHabitTrackingArgs);
  }

  @Query(() => HabitTracking, { name: 'habitTracking' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.habitTrackingService.findOne(id);
  }

  @Mutation(() => HabitTracking)
  updateHabitTracking(
    @Args('updateHabitTrackingInput')
    updateHabitTrackingInput: UpdateHabitTrackingInput,
  ) {
    return this.habitTrackingService.update(
      updateHabitTrackingInput.id,
      updateHabitTrackingInput,
    );
  }

  @Mutation(() => HabitTracking)
  removeHabitTracking(@Args('id', { type: () => Int }) id: number) {
    return this.habitTrackingService.remove(id);
  }
}
