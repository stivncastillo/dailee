import { InputType, Field, GraphQLISODateTime, Int } from "@nestjs/graphql";
import { Max, MaxLength } from "class-validator";

@InputType()
export class CreateHabitInput {
  @Field(() => String)
  @MaxLength(40)
  name: string;

  @Field(() => String)
  @MaxLength(40)
  difficulty: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  due_date?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  start_date?: Date;

  @Field(() => Int, { nullable: true })
  @Max(7)
  target_frequency?: number;

  @Field(() => Int, { nullable: true })
  @Max(7)
  current_frequency?: number;

  @Field(() => Int, { nullable: true })
  points?: number;

  @Field(() => Boolean, {
    description: "If habit is paused it doesnt list as active habit",
  })
  is_paused: boolean;
}
