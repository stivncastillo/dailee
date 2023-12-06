import { Injectable } from "@nestjs/common";
import { Habit } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { GetHabitArgs } from "./dto/args/get-habit.args";
import { GetHabitsArgs } from "./dto/args/get-habits.args";
import { CreateHabitInput } from "./dto/input/create-habit.input";
import { DeleteManyInput } from "./dto/input/delete-many.input";
import { DeleteInput } from "./dto/input/delete.input";
import { UpdateHabitInput } from "./dto/input/update-habit.input";
import { HabitRepository } from "./repositories/habits.repository";

@Injectable()
export class HabitsService {
  constructor(private habitRepository: HabitRepository) {}

  public async getMany(getHabitsArgs: GetHabitsArgs): Promise<Habit[]> {
    return await this.habitRepository.getMany(getHabitsArgs);
  }

  public async getOne(getHabitArgs: GetHabitArgs) {
    return await this.habitRepository.getOne(getHabitArgs);
  }

  public async create(
    createHabitData: CreateHabitInput & { userId: string },
  ): Promise<Habit> {
    const habit = await this.habitRepository.create({
      data: {
        id: uuidv4(),
        user: {
          connect: {
            id: createHabitData.userId,
          },
        },
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

  public async delete(deleteHabitData: DeleteInput): Promise<Habit> {
    const review = await this.habitRepository.delete({
      where: { id: deleteHabitData.id },
    });

    return review;
  }

  public async deleteMany(deleteHabitData: DeleteManyInput): Promise<number> {
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

/*
Do in the client
const orDueDate = {
      OR: [{ due_date: null }, { due_date: { gte: getHabitsArgs.where.due_date } }],
    };

    return await this.habitRepository.getMany({
      where: {
        isPaused: getHabitsArgs.isPaused,
        userId: getHabitsArgs.userId,
        ...(getHabitsArgs.dueDate ? orDueDate : {}),
      },
    });

    */
