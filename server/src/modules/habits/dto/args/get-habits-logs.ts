import { ArgsType, Field } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

import { HabitLogOrderByWithRelationInput } from "../orderby/habit-logs-order-by.args";
import { HabitOrderByWithRelationInput } from "../orderby/habits-order-by.args";
import {
  HabitLogWhereInput,
  HabitLogWhereUniqueInput,
} from "../where/habit-logs-where.args";
import {
  HabitWhereInput,
  HabitWhereUniqueInput,
} from "../where/habits-where.args";

@ArgsType()
export class GetHabitLogsArgs
  implements
    RestrictProperties<
      GetHabitLogsArgs,
      Omit<Prisma.HabitLogFindManyArgs, "include" | "select" | "distinct">
    >
{
  @Field(() => HabitWhereInput, { nullable: true })
  where: HabitLogWhereInput;

  @Field(() => [HabitOrderByWithRelationInput], { nullable: true })
  orderBy:
    | HabitLogOrderByWithRelationInput
    | HabitLogOrderByWithRelationInput[];

  @Field(() => HabitWhereUniqueInput, { nullable: true })
  cursor: HabitLogWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;
}
