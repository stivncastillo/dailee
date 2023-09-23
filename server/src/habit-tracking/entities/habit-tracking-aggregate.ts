import { ObjectType, Field } from "@nestjs/graphql";

import { HabitTrackingAvgAggregate } from "./habit-tracking-avg-aggregate";
import { HabitTrackingSumAggregate } from "./habit-tracking-sum-aggregate";

@ObjectType()
export class HabitTrackingAggregate {
  @Field(() => HabitTrackingSumAggregate, { nullable: true })
  _sum?: HabitTrackingSumAggregate;

  @Field(() => HabitTrackingAvgAggregate, { nullable: true })
  _avg?: HabitTrackingAvgAggregate;
}
