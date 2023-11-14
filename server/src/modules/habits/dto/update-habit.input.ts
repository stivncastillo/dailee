import {
  InputType,
  Field,
  PartialType,
  GraphQLISODateTime,
} from "@nestjs/graphql";
import { Habit as HabitDB } from "@prisma/client";

import { CreateHabitInput } from "./create-habit.input";

@InputType()
export class UpdateHabitInput extends PartialType(CreateHabitInput) {
  @Field(() => String)
  id: HabitDB["id"];

  @Field(() => String, { nullable: true })
  name: HabitDB["name"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dueDate?: HabitDB["dueDate"];

  @Field(() => Boolean, { nullable: true })
  isPaused: HabitDB["isPaused"];
}
