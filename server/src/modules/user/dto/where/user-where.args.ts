import { Field, InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { RestrictProperties, StringFilter } from "src/common/dtos/common.input";

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id: string;
}

@InputType()
export class UserWhereUniqueInputByEmail {
  @Field(() => String, { nullable: true })
  email: string;
}

@InputType()
export class UserWhereInput
  implements
    Omit<
      RestrictProperties<UserWhereInput, Prisma.UserWhereInput>,
      "password" | "habits" | "habitTracking" | "tasks" | "hashedRefreshToken"
    >
{
  @Field(() => StringFilter, { nullable: true })
  id: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email: StringFilter;

  @Field(() => [UserWhereInput], { nullable: true })
  AND: UserWhereInput[];
  @Field(() => [UserWhereInput], { nullable: true })
  OR: UserWhereInput[];
  @Field(() => [UserWhereInput], { nullable: true })
  NOT: UserWhereInput[];
}

@InputType()
export class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every: UserWhereInput;
  @Field(() => UserWhereInput, { nullable: true })
  some: UserWhereInput;
  @Field(() => UserWhereInput, { nullable: true })
  none: UserWhereInput;
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is: UserWhereInput;
  @Field(() => UserWhereInput, { nullable: true })
  isNot: UserWhereInput;
}
