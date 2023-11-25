import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

import { CreateHabitInput } from "./dto/create-habit.input";
import { DeleteHabitInput } from "./dto/delete-habit.input";
import { DeleteHabitsInput } from "./dto/delete-habits.input";
import { GetHabitArgs } from "./dto/get-habit.args";
import { GetHabitsArgs } from "./dto/get-habits.args";
import { UpdateHabitInput } from "./dto/update-habit.input";
import { Habit } from "./entities/habit.entity";
import { HabitRepository } from "./habits.repository";

@Injectable()
export class HabitsService {
  constructor(private habitRepository: HabitRepository) {}

  public async getMany(
    getHabitsArgs: GetHabitsArgs & { userId: string },
  ): Promise<Habit[]> {
    const orDueDate = {
      OR: [{ dueDate: null }, { dueDate: { gte: getHabitsArgs.dueDate } }],
    };

    return await this.habitRepository.getMany({
      where: {
        isPaused: getHabitsArgs.isPaused,
        userId: getHabitsArgs.userId,
        ...(getHabitsArgs.dueDate ? orDueDate : {}),
      },
    });
  }

  public async getOne(getHabitArgs: GetHabitArgs) {
    return await this.habitRepository.getOne({
      where: { id: getHabitArgs.id },
    });
  }

  public async create(
    createHabitData: CreateHabitInput & { userId: string },
  ): Promise<Habit> {
    const habit = await this.habitRepository.create({
      data: {
        id: uuidv4(),
        userId: createHabitData.userId,
        ...createHabitData,
      },
    });

    return habit;
  }

  public async update(updateHabitData: UpdateHabitInput) {
    const review = await this.habitRepository.update({
      where: { id: updateHabitData.id },
      data: updateHabitData,
    });

    return review;
  }

  public async delete(deleteHabitData: DeleteHabitInput): Promise<Habit> {
    const review = await this.habitRepository.delete({
      where: { id: deleteHabitData.id },
    });

    return review;
  }

  public async deleteMany(deleteHabitData: DeleteHabitsInput): Promise<number> {
    const { count } = await this.habitRepository.deleteMany({
      where: {
        id: {
          in: deleteHabitData.ids,
        },
      },
    });

    return count;
  }
}
