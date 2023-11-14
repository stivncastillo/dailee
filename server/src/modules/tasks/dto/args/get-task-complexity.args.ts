import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetTaskComplexityArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
