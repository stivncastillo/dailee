import { ArgsType, Field, GraphQLISODateTime } from '@nestjs/graphql';

@ArgsType()
export class GetHabitTrackingsArgs {
  @Field(() => GraphQLISODateTime, { nullable: true })
  dateStart?: Date;

  @Field(() => GraphQLISODateTime, { nullable: true })
  dateEnd?: Date;
}
