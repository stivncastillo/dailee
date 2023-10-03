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

  public async getMany(getHabitTrackingArgs: GetHabitTrackingsArgs) {
    return await this.habitTrackingRepository.getMany({
      where: {
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
    createHabitData: CreateHabitTrackingInput,
  ): Promise<HabitTracking> {
    const habitTracking = await this.habitTrackingRepository.create({
      data: {
        ...createHabitData,
      },
    });

    return habitTracking;
  }

  public async update(updateHabitData: UpdateHabitTrackingInput) {
    const habitTracking = await this.habitTrackingRepository.update({
      where: { id: updateHabitData.id },
      data: updateHabitData,
    });

    return habitTracking;
  }

  public async delete(
    deleteHabitData: DeleteHabitTrackingInput,
  ): Promise<HabitTracking> {
    const review = await this.habitTrackingRepository.delete({
      where: { id: deleteHabitData.id },
    });

    return review;
  }
}
