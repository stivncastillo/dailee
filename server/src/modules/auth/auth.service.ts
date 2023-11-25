import { ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import * as argon from "argon2";

import { SignResponse } from "./dto/sign-response";
import { SigninInput } from "./dto/signin.input";
import { SignupInput } from "./dto/signup.input";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async signup(signupInput: SignupInput): Promise<SignResponse> {
    const hashedPassword = await argon.hash(signupInput.password);
    const user = await this.userService.create({
      ...signupInput,
      password: hashedPassword,
    });

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );

    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }

  async signin(signinInput: SigninInput): Promise<SignResponse> {
    const user = await this.userService.getOneByEmail({
      where: { email: signinInput.email },
    });

    if (!user) {
      throw new ForbiddenException("No user found with this email");
    }

    const isPasswordValid = await argon.verify(
      user.password,
      signinInput.password,
    );

    if (!isPasswordValid) {
      throw new ForbiddenException("Invalid password");
    }

    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );

    await this.updateRefreshToken(user.id, refreshToken);

    return { accessToken, refreshToken, user };
  }

  async logout(userId: string) {
    await this.updateRefreshToken(userId, null);
    return { loggedOut: true };
  }

  async getNewTokens(userId: string, refreshToken: string) {
    const user = await this.userService.getOne({
      where: { id: userId },
    });

    if (!user) {
      throw new ForbiddenException("Access Denied");
    }

    const isRefreshTokenValid = await argon.verify(
      user.hashedRefreshToken,
      refreshToken,
    );

    if (!isRefreshTokenValid) {
      throw new ForbiddenException("Access Denied");
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await this.createTokens(user.id, user.email);

    await this.updateRefreshToken(user.id, newRefreshToken);

    return { accessToken, refreshToken: newRefreshToken, user };
  }

  async createTokens(userId: string, email: string) {
    const accessToken = this.jwtService.sign(
      { userId, email },
      {
        expiresIn: "15d",
        secret: this.configService.get("auth.accessTokenSecret"),
      },
    );
    const refreshToken = this.jwtService.sign(
      { userId, email, accessToken },
      {
        expiresIn: "7d",
        secret: this.configService.get("auth.refreshTokenSecret"),
      },
    );

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await argon.hash(refreshToken);

    await this.userService.update({
      id: userId,
      hashedRefreshToken,
    });
  }
}
