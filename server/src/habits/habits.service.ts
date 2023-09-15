import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

import { CreateHabitInput } from './dto/create-habit.input';
import { DeleteHabitInput } from './dto/delete-habit.input';
import { GetHabitArgs } from './dto/get-habit.args';
import { GetHabitsArgs } from './dto/get-habits.args';
import { UpdateHabitInput } from './dto/update-habit.input';
import { Habit } from './entities/habit.entity';
import { HabitRepository } from './habits.repository';

@Injectable()
export class HabitsService {
  constructor(private habitRepository: HabitRepository) {}

  public async create(createHabitData: CreateHabitInput): Promise<Habit> {
    const habit = await this.habitRepository.createHabit({
      data: {
        id: uuidv4(),
        ...createHabitData,
      },
    });

    return habit;
  }

  public async getHabits(getHabitsArgs: GetHabitsArgs): Promise<Habit[]> {
    return await this.habitRepository.getHabits({
      where: { isPaused: getHabitsArgs.isPaused },
    });
  }

  public async getHabit(getHabitArgs: GetHabitArgs) {
    return await this.habitRepository.getHabit({
      where: { id: getHabitArgs.id },
    });
  }

  public async update(updateHabitData: UpdateHabitInput) {
    const review = await this.habitRepository.updateReview({
      where: { id: updateHabitData.id },
      data: updateHabitData,
    });

    return review;
  }

  public async deleteHabit(deleteHabitData: DeleteHabitInput): Promise<Habit> {
    const review = await this.habitRepository.deleteHabit({
      where: { id: deleteHabitData.id },
    });

    return review;
  }
}
