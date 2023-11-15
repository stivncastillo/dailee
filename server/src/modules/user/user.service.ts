import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

import { CreateUserInput } from "./dto/create-user.input";
import { GetUserArgs, GetUserByEmailArgs } from "./dto/get-user.args";
import { UpdateUserInput } from "./dto/update-user.input";
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

  public async update(updateUserData: UpdateUserInput) {
    const review = await this.userRepository.update({
      where: { id: updateUserData.id },
      data: updateUserData,
    });

    return review;
  }

  public async getOne(getUserArgs: GetUserArgs) {
    return await this.userRepository.getOne(getUserArgs);
  }

  public async getOneByEmail(getUserArgs: GetUserByEmailArgs) {
    return await this.userRepository.getOne(getUserArgs);
  }
}
