import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

@InputType()
export class HabitOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder;
}

@InputType()
export class HabitOrderByWithRelationInput
  implements
    RestrictProperties<
      HabitOrderByWithRelationInput,
      Omit<
        Prisma.HabitOrderByWithRelationInput,
        "updated_at" | "user_id" | "user" | "habit_logs"
      >
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  points: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  due_date: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  start_date: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  difficulty: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  target_frequency: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  current_frequency: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  is_paused: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  created_at: Prisma.SortOrder;
}
