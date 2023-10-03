import {
  InputType,
  Field,
  PartialType,
  GraphQLISODateTime,
} from "@nestjs/graphql";
import { HabitTracking as HabitTrackingDB } from "@prisma/client";

import { CreateHabitTrackingInput } from "./create-habit-tracking.input";

@InputType()
export class UpdateHabitTrackingInput extends PartialType(
  CreateHabitTrackingInput,
) {
  @Field(() => String)
  id: HabitTrackingDB["id"];

  @Field(() => Boolean, { nullable: true })
  points: HabitTrackingDB["points"];

  @Field(() => String, { nullable: true })
  habitId: HabitTrackingDB["habitId"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  userId?: HabitTrackingDB["userId"];
}
