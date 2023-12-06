import { Injectable } from "@nestjs/common";
import { HabitLog } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { GetHabitLogArgs } from "./dto/args/get-habit-log.args";
import { GetHabitLogsArgs } from "./dto/args/get-habits-logs";
import { CreateHabitLogInput } from "./dto/input/create-habit-log.input";
import { DeleteManyInput } from "./dto/input/delete-many.input";
import { DeleteInput } from "./dto/input/delete.input";
import { UpdateHabitLogInput } from "./dto/input/update-habit-log.input";
import { HabitLogRepository } from "./repositories/habit-logs.repository";

@Injectable()
export class HabitLogsService {
  constructor(private habitLogRepository: HabitLogRepository) {}

  public async getMany(data: GetHabitLogsArgs): Promise<HabitLog[]> {
    return await this.habitLogRepository.getMany(data);
  }

  public async getOne(getHabitArgs: GetHabitLogArgs): Promise<HabitLog> {
    return await this.habitLogRepository.getOne(getHabitArgs);
  }

  public async create(data: CreateHabitLogInput): Promise<HabitLog> {
    const habit = await this.habitLogRepository.create({
      data: {
        id: uuidv4(),
        ...data,
      },
    });

    return habit;
  }

  public async update(data: UpdateHabitLogInput) {
    const review = await this.habitLogRepository.update({
      where: { id: data.id },
      data: data,
    });

    return review;
  }

  public async delete(deleteHabitData: DeleteInput): Promise<HabitLog> {
    const review = await this.habitLogRepository.delete({
      where: { id: deleteHabitData.id },
    });

    return review;
  }

  public async deleteMany(deleteHabitData: DeleteManyInput): Promise<number> {
    const { count } = await this.habitLogRepository.deleteMany({
      where: {
        id: {
          in: deleteHabitData.ids,
        },
      },
    });

    return count;
  }
}
