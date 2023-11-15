import { ArgsType, Field } from "@nestjs/graphql";

import {
  UserWhereUniqueInput,
  UserWhereUniqueInputByEmail,
} from "./where/user-where.args";

@ArgsType()
export class GetUserArgs {
  @Field({ nullable: true })
  where: UserWhereUniqueInput;
}
@ArgsType()
export class GetUserByEmailArgs {
  @Field({ nullable: true })
  where: UserWhereUniqueInputByEmail;
}
