import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

@InputType()
export class TaskOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder, { nullable: true })
  _count: Prisma.SortOrder;
}

@InputType()
export class TaskOrderByWithRelationInput
  implements
    RestrictProperties<
      TaskOrderByWithRelationInput,
      Omit<
        Prisma.TaskOrderByWithRelationInput,
        "updated_at" | "user_id" | "user"
      >
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  title: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  difficulty: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  points: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  due_date: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  status: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  completed_date: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  created_at: Prisma.SortOrder;
}
