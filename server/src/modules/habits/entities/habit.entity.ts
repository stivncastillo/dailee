import { ObjectType, Field, GraphQLISODateTime, Int } from "@nestjs/graphql";
import { Habit as HabitDB } from "@prisma/client";
import { User } from "src/modules/user/entities/user.entity";

@ObjectType()
export class Habit {
  @Field(() => String)
  id: HabitDB["id"];

  @Field(() => String)
  name: HabitDB["name"];

  @Field(() => String)
  difficulty: HabitDB["difficulty"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  due_date?: HabitDB["due_date"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  start_date?: HabitDB["start_date"];

  @Field(() => Int, { nullable: true })
  target_frequency?: HabitDB["target_frequency"];

  @Field(() => Int, { nullable: true })
  current_frequency?: HabitDB["current_frequency"];

  @Field(() => Int, { nullable: true })
  points?: HabitDB["points"];

  @Field(() => Boolean)
  is_paused: HabitDB["is_paused"];

  @Field(() => GraphQLISODateTime)
  created_at: HabitDB["created_at"];

  @Field(() => GraphQLISODateTime)
  updated_at: HabitDB["updated_at"];

  @Field(() => User)
  user_id: HabitDB["user_id"];

  // Fields from habit logs

  @Field(() => Int, { defaultValue: 0 })
  completions?: number;

  @Field(() => Boolean, { defaultValue: false })
  is_completed?: boolean;

  @Field(() => Boolean, { defaultValue: false })
  is_target_completed?: boolean;

  @Field(() => Int, { defaultValue: 0 })
  points_scored?: number;
}
