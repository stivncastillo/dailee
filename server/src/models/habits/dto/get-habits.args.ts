import { ArgsType, Field, GraphQLISODateTime } from "@nestjs/graphql";
import { IsBoolean } from "class-validator";

@ArgsType()
export class GetHabitsArgs {
  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  isPaused?: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsBoolean()
  dueDate?: string;
}
