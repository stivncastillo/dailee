import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DeleteHabitLogInput {
  @Field()
  habit_id: string;
}
