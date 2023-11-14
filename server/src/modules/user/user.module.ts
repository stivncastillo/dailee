import { Module } from "@nestjs/common";
import { PrismaModule } from "src/common/database/prisma/prisma.module";

import { UserRepository } from "./user.repository";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
  providers: [UserResolver, UserService, UserRepository],
  imports: [PrismaModule],
  exports: [UserService],
})
export class UserModule {}
