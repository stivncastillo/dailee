import { Injectable } from '@nestjs/common';

import { CreateHabitTrackingInput } from './dto/create-habit-tracking.input';
import { GetHabitTrackingArgs } from './dto/get-habit-trackings.args';
import { UpdateHabitTrackingInput } from './dto/update-habit-tracking.input';
import { HabitTracking } from './entities/habit-tracking.entity';
import { HabitTrackingRepository } from './habit-tracking.repository';

@Injectable()
export class HabitTrackingService {
  constructor(private habitTrackingRepository: HabitTrackingRepository) {}

  public async create(
    createHabitData: CreateHabitTrackingInput,
  ): Promise<HabitTracking> {
    const habitTracking =
      await this.habitTrackingRepository.createHabitTracking({
        data: {
          ...createHabitData,
        },
      });

    return habitTracking;
  }

  public async getHabitsTracking(getHabitTrackingArgs: GetHabitTrackingArgs) {
    return await this.habitTrackingRepository.getHabitTrackings({
      where: { date: getHabitTrackingArgs.date },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} habitTracking`;
  }

  update(id: number, updateHabitTrackingInput: UpdateHabitTrackingInput) {
    return `This action updates a #${id} habitTracking`;
  }

  remove(id: number) {
    return `This action removes a #${id} habitTracking`;
  }
}
