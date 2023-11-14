import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";
// import { PostOrderByRelationAggregateInput } from 'src/models/posts/dtos/order-by.args'

@InputType()
export class TasksComplexitiesOrderByWithRelationInput
  implements
    Omit<
      RestrictProperties<
        TasksComplexitiesOrderByWithRelationInput,
        Prisma.TasksComplexitiesOrderByWithRelationInput
      >,
      "createdAt" | "tasks" | "id"
    >
{
  @Field(() => Prisma.SortOrder, { nullable: true })
  id: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  name: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder, { nullable: true })
  points: Prisma.SortOrder;
  // @Field(() => PostOrderByRelationAggregateInput, { nullable: true })
  // posts: PostOrderByRelationAggregateInput
}
