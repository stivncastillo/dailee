import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from "src/common/dtos/common.input";

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

  @Field(() => StringFilter, { nullable: true })
  user_id: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  status: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  difficulty: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  points: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  due_date: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  completed_date: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at: DateTimeFilter;

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
