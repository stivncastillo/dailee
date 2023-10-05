import { Field, GraphQLISODateTime, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class DeleteHabitTrackingInput {
  @Field(() => GraphQLISODateTime)
  @IsNotEmpty()
  date: Date;

  @Field(() => String)
  @IsNotEmpty()
  habitId: string;
}
