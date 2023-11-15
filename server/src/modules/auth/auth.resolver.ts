import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { AuthService } from "./auth.service";
import { CurrentUser } from "./decorators/currentUser.decorator";
import { CurrentUserId } from "./decorators/currentUserId.decorator";
import { Public } from "./decorators/public.decorator";
import { LogoutResponse } from "./dto/logout-response";
import { NewTokensResponse } from "./dto/new-tokens.response";
import { SignResponse } from "./dto/sign-response";
import { SigninInput } from "./dto/signin.input";
import { SignupInput } from "./dto/signup.input";
import { RefreshTokenGuard } from "./guards/refreshToken.guard";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  // Mutations
  @Public()
  @Mutation(() => SignResponse)
  signup(@Args("signupInput") signupInput: SignupInput): Promise<SignResponse> {
    return this.authService.signup(signupInput);
  }

  @Public()
  @Mutation(() => SignResponse)
  signin(@Args("signinInput") signinInput: SigninInput): Promise<SignResponse> {
    return this.authService.signin(signinInput);
  }

  @Mutation(() => LogoutResponse)
  logout(
    @Args("id", { type: () => String }) id: string,
  ): Promise<LogoutResponse> {
    return this.authService.logout(id);
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Mutation(() => NewTokensResponse)
  newTokens(
    @CurrentUserId() userId: string,
    @CurrentUser("refreshToken") refreshToken: string,
  ): Promise<NewTokensResponse> {
    return this.authService.getNewTokens(userId, refreshToken);
  }
}
