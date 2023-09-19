import { Injectable } from '@nestjs/common';

import { CreateHabitTrackingInput } from './dto/create-habit-tracking.input';
import { DeleteHabitTrackingInput } from './dto/delete-habit-tracking.input';
import { GetHabitTrackingArgs } from './dto/get-habit-tracking.args';
import { GetHabitTrackingsArgs } from './dto/get-habit-trackings.args';
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

  public async getHabitTracking(getHabitTrackingArgs: GetHabitTrackingArgs) {
    return await this.habitTrackingRepository.getHabitTracking({
      where: { id: getHabitTrackingArgs.id },
    });
  }

  public async getHabitTrackings(getHabitTrackingArgs: GetHabitTrackingsArgs) {
    return await this.habitTrackingRepository.getHabitTrackings({
      where: {
        date: {
          gte: getHabitTrackingArgs.dateStart,
          lte: getHabitTrackingArgs.dateEnd,
        },
      },
    });
  }

  public async update(updateHabitData: UpdateHabitTrackingInput) {
    const habitTracking =
      await this.habitTrackingRepository.updateHabitTracking({
        where: { id: updateHabitData.id },
        data: updateHabitData,
      });

    return habitTracking;
  }
  public async deleteHabitTracking(
    deleteHabitData: DeleteHabitTrackingInput,
  ): Promise<HabitTracking> {
    const review = await this.habitTrackingRepository.deleteHabitTracking({
      where: { id: deleteHabitData.id },
    });

    return review;
  }
}
