import { Injectable } from "@nestjs/common";

import {
  CreateHabitTrackingInput,
  DeleteHabitTrackingInput,
  GetHabitTrackingArgs,
  GetHabitTrackingsAggregateArgs,
  GetHabitTrackingsArgs,
  UpdateHabitTrackingInput,
} from "./dto";
import { HabitTracking } from "./entities/habit-tracking.entity";
import { HabitTrackingRepository } from "./habit-tracking.repository";

@Injectable()
export class HabitTrackingService {
  constructor(private habitTrackingRepository: HabitTrackingRepository) {}

  public async getOne(getHabitTrackingArgs: GetHabitTrackingArgs) {
    return await this.habitTrackingRepository.getOne({
      where: { id: getHabitTrackingArgs.id },
    });
  }

  public async getMany(
    getHabitTrackingArgs: GetHabitTrackingsArgs & { userId: string },
  ) {
    return await this.habitTrackingRepository.getMany({
      where: {
        userId: getHabitTrackingArgs.userId,
        date: {
          gte: getHabitTrackingArgs.dateStart,
          lte: getHabitTrackingArgs.dateEnd,
        },
      },
    });
  }

  public async getManyAggregate(getPointsArgs: GetHabitTrackingsAggregateArgs) {
    return await this.habitTrackingRepository.getManyAggregate({
      _sum: {
        points: true,
      },
      _avg: {
        points: true,
      },
      where: {
        date: {
          gte: getPointsArgs.dateStart,
          lte: getPointsArgs.dateEnd,
        },
      },
    });
  }

  public async create(
    data: CreateHabitTrackingInput & { userId: string },
  ): Promise<HabitTracking> {
    const habitTrackingExist = await this.habitTrackingRepository.getFirst({
      data,
    });

    if (habitTrackingExist) {
      return await this.habitTrackingRepository.update({
        where: { id: habitTrackingExist.id },
        data: data,
      });
    }
    return await this.habitTrackingRepository.create({
      data: {
        ...data,
      },
    });
  }

  public async update(updateHabitData: UpdateHabitTrackingInput) {
    const habitTracking = await this.habitTrackingRepository.update({
      where: { id: updateHabitData.id },
      data: updateHabitData,
    });

    return habitTracking;
  }

  public async delete(data: DeleteHabitTrackingInput): Promise<HabitTracking> {
    const habitTrackingExist = await this.habitTrackingRepository.getFirst({
      data,
    });
    if (habitTrackingExist) {
      return await this.habitTrackingRepository.delete({
        where: { id: habitTrackingExist.id },
      });
    }
    return null;
  }
}
