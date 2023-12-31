import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class DeleteInput {
  @Field()
  id?: string;

  @Field()
  habit_id?: string;
}
