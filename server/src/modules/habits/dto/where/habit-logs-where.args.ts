import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import {
  BoolFilter,
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from "src/common/dtos/common.input";

@InputType()
export class HabitLogWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id: string;
}

@InputType()
export class HabitLogWhereInput implements Prisma.HabitLogWhereInput {
  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  date?: DateTimeFilter;

  @Field(() => IntFilter, { nullable: true })
  points?: IntFilter;

  @Field(() => BoolFilter, { nullable: true })
  is_completed?: BoolFilter;

  @Field(() => StringFilter, { nullable: true })
  notes?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  habit_id?: StringFilter;

  @Field(() => [HabitLogWhereInput], { nullable: true })
  AND?: HabitLogWhereInput[];

  @Field(() => [HabitLogWhereInput], { nullable: true })
  OR?: HabitLogWhereInput[];

  @Field(() => [HabitLogWhereInput], { nullable: true })
  NOT?: HabitLogWhereInput[];
}

@InputType()
export class HabitLogListRelationFilter {
  @Field(() => HabitLogWhereInput, { nullable: true })
  every: HabitLogWhereInput;
  @Field(() => HabitLogWhereInput, { nullable: true })
  some: HabitLogWhereInput;
  @Field(() => HabitLogWhereInput, { nullable: true })
  none: HabitLogWhereInput;
}

@InputType()
export class HabitLogRelationFilter {
  @Field(() => HabitLogWhereInput, { nullable: true })
  is: HabitLogWhereInput;
  @Field(() => HabitLogWhereInput, { nullable: true })
  isNot: HabitLogWhereInput;
}
