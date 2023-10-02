import { ArgsType, Field, Int } from "@nestjs/graphql";
import { IsNumber, IsOptional, IsString } from "class-validator";

@ArgsType()
export class GetTasksArgs {
  @Field(() => String, { nullable: true })
  @IsString()
  @IsOptional()
  status?: string;

  @Field(() => Int, { nullable: true })
  @IsNumber()
  @IsOptional()
  complexId?: number;
}
