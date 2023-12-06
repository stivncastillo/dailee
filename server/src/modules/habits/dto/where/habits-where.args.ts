import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from "src/common/dtos/common.input";

@InputType()
export class HabitWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id: string;
}

@InputType()
export class HabitWhereInput
  implements
    Omit<
      RestrictProperties<HabitWhereInput, Prisma.HabitWhereInput>,
      "user" | "habit_logs"
    >
{
  @Field(() => StringFilter, { nullable: true })
  id: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  difficulty: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  user_id: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  target_frequency: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  current_frequency: IntFilter;

  @Field(() => IntFilter, { nullable: true })
  points: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  due_date: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  start_date: DateTimeFilter;

  @Field(() => BoolFilter, { nullable: true })
  is_paused: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at: DateTimeFilter;

  @Field(() => [HabitWhereInput], { nullable: true })
  AND: HabitWhereInput[];

  @Field(() => [HabitWhereInput], { nullable: true })
  OR: HabitWhereInput[];

  @Field(() => [HabitWhereInput], { nullable: true })
  NOT: HabitWhereInput[];
}

@InputType()
export class HabitListRelationFilter {
  @Field(() => HabitWhereInput, { nullable: true })
  every: HabitWhereInput;
  @Field(() => HabitWhereInput, { nullable: true })
  some: HabitWhereInput;
  @Field(() => HabitWhereInput, { nullable: true })
  none: HabitWhereInput;
}

@InputType()
export class HabitRelationFilter {
  @Field(() => HabitWhereInput, { nullable: true })
  is: HabitWhereInput;
  @Field(() => HabitWhereInput, { nullable: true })
  isNot: HabitWhereInput;
}
