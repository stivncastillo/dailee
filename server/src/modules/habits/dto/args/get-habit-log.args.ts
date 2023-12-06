import { ArgsType, Field } from "@nestjs/graphql";

import { HabitLogWhereUniqueInput } from "../where/habit-logs-where.args";

@ArgsType()
export class GetHabitLogArgs {
  @Field({ nullable: true })
  where: HabitLogWhereUniqueInput;
}
