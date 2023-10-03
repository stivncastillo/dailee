import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsArray, IsNumber, IsOptional } from "class-validator";

@ArgsType()
export class GetTasksArgs {
  @Field(() => [String], { nullable: true })
  @IsArray()
  @IsOptional()
  status?: [string];

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsOptional()
  complexId?: number;
}
