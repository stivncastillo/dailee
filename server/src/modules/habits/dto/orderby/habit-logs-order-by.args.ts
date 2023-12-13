import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

@InputType()
export class HabitLogOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder;
}

@InputType()
export class HabitLogOrderByWithRelationInput
  implements
    RestrictProperties<
      HabitLogOrderByWithRelationInput,
      Omit<
        Prisma.HabitLogOrderByWithRelationInput,
        "habit_id" | "notes" | "habit"
      >
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  date: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  points: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  is_completed: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  is_target_completed: Prisma.SortOrder;
}
