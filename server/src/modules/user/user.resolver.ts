import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { CreateUserInput } from "./dto/create-user.input";
import { GetUserArgs } from "./dto/get-user.args";
import { User } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => User, { name: "user" })
  getUser(@Args() getUserArgs: GetUserArgs) {
    return this.userService.getOne(getUserArgs);
  }
}
