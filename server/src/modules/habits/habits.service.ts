import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";

import { GetHabitArgs } from "./dto/args/get-habit.args";
import { GetHabitsArgs } from "./dto/args/get-habits.args";
import { CreateHabitInput } from "./dto/input/create-habit.input";
import { DeleteManyInput } from "./dto/input/delete-many.input";
import { DeleteInput } from "./dto/input/delete.input";
import { UpdateHabitInput } from "./dto/input/update-habit.input";
import { Habit } from "./entities/habit.entity";
import { HabitLogRepository } from "./repositories/habit-logs.repository";
import { HabitRepository } from "./repositories/habits.repository";

@Injectable()
export class HabitsService {
  constructor(
    private habitRepository: HabitRepository,
    private habitLogRepository: HabitLogRepository,
  ) {}

  public async getMany(getHabitsArgs: GetHabitsArgs): Promise<any> {
    const habits = await this.habitRepository.getMany(getHabitsArgs);

    const newHabits = habits.map(async (habit) => {
      const { completions, is_completed, is_target_completed, points_scored } =
        await this.getCompletions(habit.id);

      return {
        ...habit,
        completions,
        is_completed,
        is_target_completed,
        points_scored,
      };
    });

    return newHabits;
  }

  public async getCompletions(habitId: string) {
    const completions = await this.habitLogRepository.getMany({
      where: {
        habit_id: habitId,
      },
    });

    const isCompleted = completions.find(
      (completion) => completion.is_completed,
    );
    const isTargetCompleted = completions.find(
      (completion) => completion.is_target_completed,
    );

    const pointsScored = completions.reduce((acc, completion) => {
      return acc + completion.points;
    }, 0);

    return {
      completions: completions.length,
      is_completed: !!isCompleted,
      is_target_completed: !!isTargetCompleted,
      points_scored: pointsScored,
    };
  }

  public async getOne(getHabitArgs: GetHabitArgs) {
    return await this.habitRepository.getOne(getHabitArgs);
  }

  public async create(
    data: CreateHabitInput & { userId: string },
  ): Promise<Habit> {
    const { userId, ...rest } = data;
    const habit = await this.habitRepository.create({
      data: {
        id: uuidv4(),
        user: {
          connect: {
            id: userId,
          },
        },
        ...rest,
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
