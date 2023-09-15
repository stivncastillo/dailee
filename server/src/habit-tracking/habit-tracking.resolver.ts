import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HabitTrackingService } from './habit-tracking.service';
import { HabitTracking } from './entities/habit-tracking.entity';
import { CreateHabitTrackingInput } from './dto/create-habit-tracking.input';
import { UpdateHabitTrackingInput } from './dto/update-habit-tracking.input';

@Resolver(() => HabitTracking)
export class HabitTrackingResolver {
  constructor(private readonly habitTrackingService: HabitTrackingService) {}

  @Mutation(() => HabitTracking)
  createHabitTracking(@Args('createHabitTrackingInput') createHabitTrackingInput: CreateHabitTrackingInput) {
    return this.habitTrackingService.create(createHabitTrackingInput);
  }

  @Query(() => [HabitTracking], { name: 'habitTracking' })
  findAll() {
    return this.habitTrackingService.findAll();
  }

  @Query(() => HabitTracking, { name: 'habitTracking' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.habitTrackingService.findOne(id);
  }

  @Mutation(() => HabitTracking)
  updateHabitTracking(@Args('updateHabitTrackingInput') updateHabitTrackingInput: UpdateHabitTrackingInput) {
    return this.habitTrackingService.update(updateHabitTrackingInput.id, updateHabitTrackingInput);
  }

  @Mutation(() => HabitTracking)
  removeHabitTracking(@Args('id', { type: () => Int }) id: number) {
    return this.habitTrackingService.remove(id);
  }
}
