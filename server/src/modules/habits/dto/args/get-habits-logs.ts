import { ArgsType, Field } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";

import { HabitLogOrderByWithRelationInput } from "../orderby/habit-logs-order-by.args";
import {
  HabitLogWhereInput,
  HabitLogWhereUniqueInput,
} from "../where/habit-logs-where.args";

@ArgsType()
export class GetHabitLogsArgs implements Prisma.HabitLogFindManyArgs {
  @Field(() => HabitLogWhereInput, { nullable: true })
  where?: HabitLogWhereInput;

  @Field(() => [HabitLogOrderByWithRelationInput], { nullable: true })
  orderBy?: HabitLogOrderByWithRelationInput;

  @Field(() => HabitLogWhereUniqueInput, { nullable: true })
  cursor?: HabitLogWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take?: number;

  @Field(() => Number, { nullable: true })
  skip?: number;
}
