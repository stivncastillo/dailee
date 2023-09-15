import { Inject } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { HabitsService } from 'src/habits/habits.service';
import { UserService } from 'src/user/user.service';

import { CreateHabitTrackingInput } from './dto/create-habit-tracking.input';
import { DeleteHabitTrackingInput } from './dto/delete-habit-tracking.input';
import { GetHabitTrackingArgs } from './dto/get-habit-tracking.args';
import { GetHabitTrackingsArgs } from './dto/get-habit-trackings.args';
import { UpdateHabitTrackingInput } from './dto/update-habit-tracking.input';
import { HabitTracking } from './entities/habit-tracking.entity';
import { HabitTrackingService } from './habit-tracking.service';

@Resolver(() => HabitTracking)
export class HabitTrackingResolver {
  constructor(private readonly habitTrackingService: HabitTrackingService) {}

  @Inject(UserService)
  private readonly userService: UserService;

  @Inject(HabitsService)
  private readonly habitService: HabitsService;

  // Queries
  @Query(() => [HabitTracking], { name: 'habitTrackings' })
  getHabitTrackings(@Args() getHabitTrackingArgs: GetHabitTrackingsArgs) {
    return this.habitTrackingService.getHabitTrackings(getHabitTrackingArgs);
  }

  @Query(() => HabitTracking, { name: 'habitTracking', nullable: false })
  getHabitTracking(
    @Args() getHabitTrackingArgs: GetHabitTrackingArgs,
  ): Promise<HabitTracking> {
    return this.habitTrackingService.getHabitTracking(getHabitTrackingArgs);
  }

  // Mutations
  @Mutation(() => HabitTracking)
  createHabitTracking(
    @Args('createHabitTrackingInput')
    createHabitTrackingInput: CreateHabitTrackingInput,
  ) {
    return this.habitTrackingService.create(createHabitTrackingInput);
  }

  @Mutation(() => HabitTracking)
  updateHabitTracking(
    @Args('updateHabitTrackingInput')
    updateHabitTrackingInput: UpdateHabitTrackingInput,
  ): Promise<HabitTracking> {
    return this.habitTrackingService.update(updateHabitTrackingInput);
  }

  @Mutation(() => HabitTracking)
  removeHabitTracking(
    @Args('deleteHabitTracking') deleteHabitTracking: DeleteHabitTrackingInput,
  ): Promise<HabitTracking> {
    return this.habitTrackingService.deleteHabitTracking(deleteHabitTracking);
  }

  // Resolvers
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
}
