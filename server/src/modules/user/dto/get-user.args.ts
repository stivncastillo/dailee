import { ArgsType, Field } from "@nestjs/graphql";

import { UserWhereUniqueInput } from "./where/user-where.args";

@ArgsType()
export class GetUserArgs {
  @Field({ nullable: true })
  where: UserWhereUniqueInput;
}
