import { ArgsType, Field } from "@nestjs/graphql";
import { IsDate, IsNotEmpty } from "class-validator";

@ArgsType()
export class GetWeeklyPointsArgs {
  @Field()
  @IsNotEmpty()
  @IsDate()
  dateStart: Date;

  @Field()
  @IsNotEmpty()
  @IsDate()
  dateEnd: Date;
}
