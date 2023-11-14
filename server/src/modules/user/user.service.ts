import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

import { CreateUserInput } from "./dto/create-user.input";
import { GetUserArgs } from "./dto/get-user.args";
import { User } from "./entities/user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async create(createUserData: CreateUserInput): Promise<User> {
    const user = await this.userRepository.create({
      data: {
        id: uuidv4(),
        ...createUserData,
      },
    });

    return user;
  }

  public async getOne(getUserArgs: GetUserArgs) {
    return await this.userRepository.getOne({
      where: { id: getUserArgs.id },
    });
  }
}
