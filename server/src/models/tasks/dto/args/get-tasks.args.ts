import { ArgsType, Field } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties } from "src/common/dtos/common.input";

import { TaskOrderByWithRelationInput } from "../orderby/task-order-by.args";
import { TaskWhereInput, TaskWhereUniqueInput } from "../where/task-where.args";

@ArgsType()
export class GetTasksArgs
  implements
    RestrictProperties<
      GetTasksArgs,
      Omit<Prisma.TaskFindManyArgs, "include" | "select" | "distinct">
    >
{
  @Field(() => TaskWhereInput, { nullable: true })
  where: TaskWhereInput;

  @Field(() => [TaskOrderByWithRelationInput], { nullable: true })
  orderBy: TaskOrderByWithRelationInput[];

  @Field(() => TaskWhereUniqueInput, { nullable: true })
  cursor: TaskWhereUniqueInput;

  @Field(() => Number, { nullable: true })
  take: number;

  @Field(() => Number, { nullable: true })
  skip: number;
}
