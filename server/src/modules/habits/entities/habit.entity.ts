import { ObjectType, Field, GraphQLISODateTime } from "@nestjs/graphql";
import { Habit as HabitDB } from "@prisma/client";

@ObjectType()
export class Habit {
  @Field(() => String)
  id: HabitDB["id"];

  @Field(() => String)
  name: HabitDB["name"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dueDate?: HabitDB["dueDate"];

  @Field(() => Boolean)
  isPaused: HabitDB["isPaused"];

  @Field(() => GraphQLISODateTime)
  createdAt: HabitDB["createdAt"];

  @Field(() => GraphQLISODateTime)
  updatedAt: HabitDB["updatedAt"];
}
