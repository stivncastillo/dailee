import { ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import * as argon from "argon2";

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

  async signup(signupInput: SignupInput) {
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

  async signin(signinInput: SigninInput) {
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

  async createTokens(userId: string, email: string) {
    const accessToken = this.jwtService.sign(
      { userId, email },
      {
        expiresIn: "10s",
        secret: this.configService.get("auth.accessTokenSecret"),
      },
    );
    const refreshToken = this.jwtService.sign(
      { userId, email },
      {
        expiresIn: "7d",
        secret: this.configService.get("auth.refreshTokenSecret"),
      },
    );

    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    await this.userService.update({
      id: userId,
      hashedRefreshToken: refreshToken,
    });
  }
}
