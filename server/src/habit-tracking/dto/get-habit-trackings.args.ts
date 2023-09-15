import { ArgsType, Field, GraphQLISODateTime } from '@nestjs/graphql';

@ArgsType()
export class GetHabitTrackingsArgs {
  @Field(() => GraphQLISODateTime, { nullable: true })
  date?: Date;
}
