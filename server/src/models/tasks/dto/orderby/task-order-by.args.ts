import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

import { TasksComplexitiesOrderByWithRelationInput } from "./complex-order-by.args";

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
        "updatedAt" | "userId" | "complexId" | "user"
      >
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  title: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  points: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  dueDate: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  status: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  completedDate: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  createdAt: Prisma.SortOrder;

  @Field(() => TasksComplexitiesOrderByWithRelationInput, { nullable: true })
  complexity: TasksComplexitiesOrderByWithRelationInput;
}
