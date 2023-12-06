import { ArgsType, Field } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

import { HabitOrderByWithRelationInput } from "../orderby/habits-order-by.args";
import {
  HabitWhereInput,
  HabitWhereUniqueInput,
} from "../where/habits-where.args";

@ArgsType()
export class GetHabitsArgs
  implements
    RestrictProperties<
      GetHabitsArgs,
      Omit<Prisma.HabitFindManyArgs, "include" | "select" | "distinct">
    >
{
  @Field(() => HabitWhereInput, { nullable: true })
  where: HabitWhereInput;

  @Field(() => [HabitOrderByWithRelationInput], { nullable: true })
  orderBy: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[];

  @Field(() => HabitWhereUniqueInput, { nullable: true })
  cursor: HabitWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;
}
