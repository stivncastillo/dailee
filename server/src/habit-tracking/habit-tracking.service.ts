import { Injectable } from '@nestjs/common';
import { CreateHabitTrackingInput } from './dto/create-habit-tracking.input';
import { UpdateHabitTrackingInput } from './dto/update-habit-tracking.input';

@Injectable()
export class HabitTrackingService {
  create(createHabitTrackingInput: CreateHabitTrackingInput) {
    return 'This action adds a new habitTracking';
  }

  findAll() {
    return `This action returns all habitTracking`;
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
