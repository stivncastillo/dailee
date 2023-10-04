import { ArgsType, Field, GraphQLISODateTime } from "@nestjs/graphql";
import { IsBoolean, IsDate, IsOptional } from "class-validator";

@ArgsType()
export class GetHabitsArgs {
  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  isPaused?: boolean;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsDate()
  @IsOptional()
  dueDate?: string;
}
