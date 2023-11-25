import { Inject } from "@nestjs/common";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { HabitsService } from "src/modules/habits/habits.service";
import { UserService } from "src/modules/user/user.service";

import {
  CreateHabitTrackingInput,
  DeleteHabitTrackingInput,
  GetHabitTrackingArgs,
  GetHabitTrackingsAggregateArgs,
  GetHabitTrackingsArgs,
  UpdateHabitTrackingInput,
} from "./dto";
import { HabitTrackingAggregate } from "./entities/habit-tracking-aggregate";
import { HabitTracking } from "./entities/habit-tracking.entity";
import { HabitTrackingService } from "./habit-tracking.service";
import { CurrentUserId } from "../auth/decorators/currentUserId.decorator";

@Resolver(() => HabitTracking)
export class HabitTrackingResolver {
  constructor(private readonly habitTrackingService: HabitTrackingService) {}

  @Inject(UserService)
  private readonly userService: UserService;

  @Inject(HabitsService)
  private readonly habitService: HabitsService;

  // Queries
  @Query(() => [HabitTracking], { name: "habitTrackings" })
  getHabitTrackings(
    @CurrentUserId() userId: string,
    @Args() getHabitTrackingArgs: GetHabitTrackingsArgs,
  ) {
    return this.habitTrackingService.getMany({
      userId,
      ...getHabitTrackingArgs,
    });
  }

  @Query(() => HabitTracking, { name: "habitTracking", nullable: true })
  getHabitTracking(
    @Args() getHabitTrackingArgs: GetHabitTrackingArgs,
  ): Promise<HabitTracking> {
    return this.habitTrackingService.getOne(getHabitTrackingArgs);
  }

  @Query(() => HabitTrackingAggregate, {
    name: "habitTrackingsAggregate",
    nullable: true,
  })
  getHabitTrackingAggregate(
    @Args() getHabitTrackingsAggregateArgs: GetHabitTrackingsAggregateArgs,
  ) {
    return this.habitTrackingService.getManyAggregate(
      getHabitTrackingsAggregateArgs,
    );
  }

  // Mutations
  @Mutation(() => HabitTracking)
  createHabitTracking(
    @CurrentUserId() userId: string,
    @Args("createHabitTrackingInput")
    createHabitTrackingInput: CreateHabitTrackingInput,
  ) {
    return this.habitTrackingService.create({
      userId,
      ...createHabitTrackingInput,
    });
  }

  @Mutation(() => HabitTracking)
  updateHabitTracking(
    @Args("updateHabitTrackingInput")
    updateHabitTrackingInput: UpdateHabitTrackingInput,
  ): Promise<HabitTracking> {
    return this.habitTrackingService.update(updateHabitTrackingInput);
  }

  @Mutation(() => HabitTracking, { nullable: true })
  deleteHabitTracking(
    @Args("deleteHabitTracking") deleteHabitTracking: DeleteHabitTrackingInput,
  ): Promise<HabitTracking> {
    return this.habitTrackingService.delete(deleteHabitTracking);
  }

  // Resolvers
  @ResolveField()
  async userId(@Parent() habitTracking: HabitTracking) {
    const { userId } = habitTracking;
    return this.userService.getOne({
      where: {
        id: userId,
      },
    });
  }

  @ResolveField()
  async habitId(@Parent() habitTracking: HabitTracking) {
    const { habitId } = habitTracking;
    return this.habitService.getOne({ id: habitId });
  }
}
