import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/common/database/prisma/prisma.service";

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async getOne(params: { where?: Prisma.UserWhereUniqueInput }): Promise<User> {
    const { where } = params;
    return this.prisma.user.findUnique({ where });
  }

  async create(params: { data: Prisma.UserCreateInput }): Promise<User> {
    const { data } = params;
    return this.prisma.user.create({ data });
  }
}
