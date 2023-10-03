import { ObjectType, Field, Int } from "@nestjs/graphql";
import { TasksComplexities as ComplexityDB } from "@prisma/client";

@ObjectType()
export class TasksComplexity {
  @Field(() => String)
  id: ComplexityDB["id"];

  @Field(() => String)
  name: ComplexityDB["name"];

  @Field(() => Int, { nullable: true })
  points?: ComplexityDB["points"];
}
