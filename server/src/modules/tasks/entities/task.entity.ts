import { ObjectType, Field, Int, GraphQLISODateTime } from "@nestjs/graphql";
import { Task as TaskDB } from "@prisma/client";
import { User } from "src/modules/user/entities/user.entity";

@ObjectType()
export class Task {
  @Field(() => String)
  id: TaskDB["id"];

  @Field(() => String)
  title: TaskDB["title"];

  @Field(() => String)
  status: TaskDB["status"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  due_date?: TaskDB["due_date"];

  @Field(() => Int, { nullable: true })
  points?: TaskDB["points"];

  @Field(() => User)
  user_id: TaskDB["user_id"];

  @Field(() => String)
  difficulty: TaskDB["difficulty"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  completed_date?: TaskDB["completed_date"];

  @Field(() => GraphQLISODateTime)
  created_at: TaskDB["created_at"];

  @Field(() => GraphQLISODateTime)
  updated_at: TaskDB["updated_at"];
}
