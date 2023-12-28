import { Inject, Injectable } from "@nestjs/common";
import { HabitLog } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

import { GetHabitLogArgs } from "./dto/args/get-habit-log.args";
import { GetHabitLogsArgs } from "./dto/args/get-habits-logs";
import { CreateHabitLogInput } from "./dto/input/create-habit-log.input";
import { DeleteHabitLogInput } from "./dto/input/delete-habit-log.input";
import { DeleteManyInput } from "./dto/input/delete-many.input";
import { UpdateHabitLogInput } from "./dto/input/update-habit-log.input";
import { HabitsService } from "./habits.service";
import { HabitLogRepository } from "./repositories/habit-logs.repository";

@Injectable()
export class HabitLogsService {
  constructor(private habitLogRepository: HabitLogRepository) {}

  @Inject(HabitsService)
  private readonly habitService: HabitsService;

  public async getMany(data: GetHabitLogsArgs): Promise<HabitLog[]> {
    return await this.habitLogRepository.getMany(data);
  }

  public async getOne(getHabitArgs: GetHabitLogArgs): Promise<HabitLog> {
    return await this.habitLogRepository.getOne(getHabitArgs);
  }

  public async create(data: CreateHabitLogInput): Promise<HabitLog> {
    const habitLog = await this.habitLogRepository.create({
      data: {
        id: uuidv4(),
        ...data,
        date: new Date(),
        notes: data.notes || "",
      },
    });

    const habit = await this.habitService.getOne({
      where: { id: data.habit_id },
    });

    const habitLogs = await this.getCountByHabitId(data.habit_id);

    let isCompleted = false;
    if (habitLogs === habit.current_frequency) {
      isCompleted = true;
    }

    let isTargetCompleted = false;
    if (habitLogs === habit.target_frequency) {
      isTargetCompleted = true;
    }

    return await this.update({
      id: habitLog.id,
      is_completed: isCompleted,
      is_target_completed: isTargetCompleted,
      points: habit.points,
    });
  }

  public async update(data: UpdateHabitLogInput) {
    const { id, ...rest } = data;
    return await this.habitLogRepository.update({
      where: { id },
      data: rest,
    });
  }

  public async delete(deleteHabitData: DeleteHabitLogInput): Promise<HabitLog> {
    return await this.habitLogRepository.deleteLastByHabitId(
      deleteHabitData.habit_id,
    );
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

  public async getCountByHabitId(habit_id: string): Promise<number> {
    return await this.habitLogRepository.getCount({
      where: {
        habit_id: {
          equals: habit_id,
        },
      },
    });
  }
}
