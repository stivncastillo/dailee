import { InputType, Field, PartialType } from "@nestjs/graphql";
import { User as UserDB } from "@prisma/client";

import { CreateUserInput } from "./create-user.input";

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  id: UserDB["id"];

  @Field(() => String, { nullable: true })
  name?: UserDB["name"];

  @Field(() => String, { nullable: true })
  email?: UserDB["email"];

  @Field(() => String, { nullable: true })
  password?: UserDB["password"];

  @Field(() => String, { nullable: true })
  hashed_refresh_token?: UserDB["hashed_refresh_token"];
}
