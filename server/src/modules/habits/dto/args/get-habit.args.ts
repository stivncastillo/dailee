import { ArgsType, Field } from "@nestjs/graphql";

import { HabitWhereUniqueInput } from "../where/habits-where.args";

@ArgsType()
export class GetHabitArgs {
  @Field({ nullable: true })
  where: HabitWhereUniqueInput;
}
