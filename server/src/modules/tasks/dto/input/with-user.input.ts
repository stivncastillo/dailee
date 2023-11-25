import { InputType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class WithUserInput {
  @Field(() => String)
  @IsNotEmpty()
  userId: string;
}
