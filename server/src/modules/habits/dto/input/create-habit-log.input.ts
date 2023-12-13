import { InputType, Field, GraphQLISODateTime, Int } from "@nestjs/graphql";
import { MaxLength } from "class-validator";

@InputType()
export class CreateHabitLogInput {
  @Field(() => String)
  @MaxLength(40)
  habit_id: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  date?: Date;

  @Field(() => Int, { nullable: true })
  points?: number;

  @Field(() => Boolean, { defaultValue: false })
  is_completed?: boolean;

  @Field(() => Boolean, { defaultValue: false })
  is_target_completed?: boolean;

  @Field(() => String, { nullable: true })
  notes?: string;
}
