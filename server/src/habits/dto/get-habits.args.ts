import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean } from 'class-validator';

@ArgsType()
export class GetHabitsArgs {
  @Field(() => String, { nullable: true })
  @IsBoolean()
  isPaused?: boolean;
}
