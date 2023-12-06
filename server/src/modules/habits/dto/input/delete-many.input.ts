import { Field, InputType } from "@nestjs/graphql";
import { IsArray } from "class-validator";

@InputType()
export class DeleteManyInput {
  @Field(() => [String])
  @IsArray()
  ids: Array<string>;
}
