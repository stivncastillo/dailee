import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from "src/common/dtos/common.input";

import { TasksComplexitiesRelationFilter } from "./complex-where.args";

@InputType()
export class TaskWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id: string;
}

@InputType()
export class TaskWhereInput
  implements
    Omit<RestrictProperties<TaskWhereInput, Prisma.TaskWhereInput>, "user">
{
  @Field(() => StringFilter, { nullable: true })
  id: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  title: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  complexId: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  userId: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  status: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  points: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  dueDate: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  completedDate: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt: DateTimeFilter;

  @Field(() => TasksComplexitiesRelationFilter, { nullable: true })
  complexity: TasksComplexitiesRelationFilter;

  @Field(() => [TaskWhereInput], { nullable: true })
  AND: TaskWhereInput[];
  @Field(() => [TaskWhereInput], { nullable: true })
  OR: TaskWhereInput[];
  @Field(() => [TaskWhereInput], { nullable: true })
  NOT: TaskWhereInput[];
}

@InputType()
export class TaskListRelationFilter {
  @Field(() => TaskWhereInput, { nullable: true })
  every: TaskWhereInput;
  @Field(() => TaskWhereInput, { nullable: true })
  some: TaskWhereInput;
  @Field(() => TaskWhereInput, { nullable: true })
  none: TaskWhereInput;
}

@InputType()
export class TaskRelationFilter {
  @Field(() => TaskWhereInput, { nullable: true })
  is: TaskWhereInput;
  @Field(() => TaskWhereInput, { nullable: true })
  isNot: TaskWhereInput;
}
