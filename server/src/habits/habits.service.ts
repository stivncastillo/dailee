import { Injectable } from '@nestjs/common';
import { CreateHabitInput } from './dto/create-habit.input';
import { UpdateHabitInput } from './dto/update-habit.input';
import { HabitRepository } from './habits.repository';
import { Habit } from './entities/habit.entity';
import { v4 as uuidv4 } from 'uuid';
import { GetHabitsArgs } from './dto/get-habits.args';
import { GetHabitArgs } from './dto/get-habit.args';

@Injectable()
export class HabitsService {
  constructor(private habitRepository: HabitRepository) {}

  public async create(createHabitInput: CreateHabitInput): Promise<Habit> {
    const review = await this.habitRepository.createHabit({
      data: {
        id: uuidv4(),
        ...createHabitInput,
      },
    });

    return review;
  }

  public async findAll(getHabitsArgs: GetHabitsArgs): Promise<Habit[]> {
    return await this.habitRepository.getHabits({
      where: { isPaused: getHabitsArgs.isPaused },
    });
  }

  public async findOne(getHabitArgs: GetHabitArgs) {
    return await this.habitRepository.getHabit({
      where: { id: getHabitArgs.id },
    });
  }

  public async update(updateHabitInput: UpdateHabitInput) {
    const review = await this.habitRepository.updateReview({
      where: { id: updateHabitInput.id },
      data: updateHabitInput,
    });

    return review;
  }

  remove(id: number) {
    return `This action removes a #${id} habit`;
  }
}
