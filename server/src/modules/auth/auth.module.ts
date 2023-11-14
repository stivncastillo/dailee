import { Module } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaModule } from "src/common/database/prisma/prisma.module";

import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";

@Module({
  providers: [AuthResolver, AuthService, JwtService],
  imports: [PrismaModule, UserModule],
})
export class AuthModule {}
