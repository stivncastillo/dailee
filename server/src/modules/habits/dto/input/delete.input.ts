import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class DeleteInput {
  @Field()
  @IsNotEmpty()
  id: string;
}
