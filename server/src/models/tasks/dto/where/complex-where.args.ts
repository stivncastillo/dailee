import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import {
  IntFilter,
  RestrictProperties,
  StringFilter,
} from "src/common/dtos/common.input";

@InputType()
export class TasksComplexitiesWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uid: string;
}

@InputType()
export class TasksComplexitiesWhereInput
  implements
    Omit<
      RestrictProperties<
        TasksComplexitiesWhereInput,
        Prisma.TasksComplexitiesWhereInput
      >,
      "tasks"
    >
{
  @Field(() => IntFilter, { nullable: true })
  id: IntFilter;
  @Field(() => IntFilter, { nullable: true })
  points: IntFilter;
  @Field(() => StringFilter, { nullable: true })
  name: StringFilter;

  @Field(() => [TasksComplexitiesWhereInput], { nullable: true })
  AND: TasksComplexitiesWhereInput[];
  @Field(() => [TasksComplexitiesWhereInput], { nullable: true })
  OR: TasksComplexitiesWhereInput[];
  @Field(() => [TasksComplexitiesWhereInput], { nullable: true })
  NOT: TasksComplexitiesWhereInput[];
}

@InputType()
export class TasksComplexitiesRelationFilter {
  @Field(() => TasksComplexitiesWhereInput, { nullable: true })
  is: TasksComplexitiesWhereInput;
  @Field(() => TasksComplexitiesWhereInput, { nullable: true })
  isNot: TasksComplexitiesWhereInput;
}
