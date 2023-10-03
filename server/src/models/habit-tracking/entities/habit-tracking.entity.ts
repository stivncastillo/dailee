import { ObjectType, Field, Int, GraphQLISODateTime } from "@nestjs/graphql";
import { HabitTracking as HabitTrackingDB } from "@prisma/client";
import { Habit } from "src/models/habits/entities/habit.entity";
import { User } from "src/models/user/entities/user.entity";

@ObjectType()
export class HabitTracking {
  @Field(() => String)
  id: HabitTrackingDB["id"];

  @Field(() => GraphQLISODateTime)
  date: HabitTrackingDB["date"];

  @Field(() => Int)
  points: HabitTrackingDB["points"];

  @Field(() => Habit)
  habitId: HabitTrackingDB["habitId"];

  @Field(() => User)
  userId: HabitTrackingDB["userId"];
}
