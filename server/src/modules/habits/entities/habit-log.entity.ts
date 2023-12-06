import { ObjectType, Field, GraphQLISODateTime, Int } from "@nestjs/graphql";
import { HabitLog as HabitLogDB } from "@prisma/client";
import { User } from "src/modules/user/entities/user.entity";

@ObjectType()
export class HabitLog {
  @Field(() => String)
  id: HabitLogDB["id"];

  @Field(() => User)
  habit_id: HabitLogDB["habit_id"];

  @Field(() => GraphQLISODateTime)
  date: HabitLogDB["date"];

  @Field(() => Boolean)
  is_completed: HabitLogDB["is_completed"];

  @Field(() => Int, { nullable: true })
  points?: HabitLogDB["points"];

  @Field(() => String)
  notes: HabitLogDB["notes"];
}
