import { InputType, Field, PartialType } from "@nestjs/graphql";

import { CreateHabitLogInput } from "./create-habit-log.input";

@InputType()
export class UpdateHabitLogInput extends PartialType(CreateHabitLogInput) {
  @Field(() => String)
  id: string;
}
