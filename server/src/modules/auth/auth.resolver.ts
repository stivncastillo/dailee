import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { AuthService } from "./auth.service";
import { SignResponse } from "./dto/sign-response";
import { SigninInput } from "./dto/signin.input";
import { SignupInput } from "./dto/signup.input";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // Mutations
  @Mutation(() => SignResponse)
  signup(@Args("signupInput") signupInput: SignupInput): Promise<SignResponse> {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => SignResponse)
  signin(@Args("signinInput") signinInput: SigninInput): Promise<SignResponse> {
    return this.authService.signin(signinInput);
  }
}
