import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateUserInput } from './dto/create-user.input';
import { GetUserArgs } from './dto/get-user.args';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async create(createHabitData: CreateUserInput): Promise<User> {
    const user = await this.userRepository.createUser({
      data: {
        id: uuidv4(),
        ...createHabitData,
      },
    });

    return user;
  }

  public async getUser(getUserArgs: GetUserArgs) {
    return await this.userRepository.getUser({
      where: { id: getUserArgs.id },
    });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
