import { ObjectType, Field, Int, GraphQLISODateTime } from "@nestjs/graphql";
import { Task as TaskDB } from "@prisma/client";
import { User } from "src/modules/user/entities/user.entity";

import { TasksComplexity } from "./task-complexity.entity";

@ObjectType()
export class Task {
  @Field(() => String)
  id: TaskDB["id"];

  @Field(() => String)
  title: TaskDB["title"];

  @Field(() => String)
  status: TaskDB["status"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  dueDate?: TaskDB["dueDate"];

  @Field(() => Int, { nullable: true })
  points?: TaskDB["points"];

  @Field(() => User)
  userId: TaskDB["userId"];

  @Field(() => TasksComplexity)
  complexId: TaskDB["complexId"];

  @Field(() => GraphQLISODateTime, { nullable: true })
  completedDate?: TaskDB["completedDate"];

  @Field(() => GraphQLISODateTime)
  createdAt: TaskDB["createdAt"];

  @Field(() => GraphQLISODateTime)
  updatedAt: TaskDB["updatedAt"];
}
