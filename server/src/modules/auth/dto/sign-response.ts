import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/modules/user/entities/user.entity";

@ObjectType()
export class SignResponse {
  @Field(() => String)
  accessToken: string;

  @Field(() => String)
  refreshToken: string;

  @Field(() => User)
  user: User;
}
