import { InputType, Int, Field, GraphQLISODateTime } from "@nestjs/graphql";
import {
  IsNotEmpty,
  MaxLength,
  Max,
  Min,
  IsEnum,
  IsOptional,
} from "class-validator";
import { TaskStatus } from "src/common/constants";

const todoStatus: TaskStatus = TaskStatus.Todo;

@InputType()
export class CreateTaskInput {
  @Field(() => String)
  @MaxLength(80)
  title: string;

  @Field(() => Int, { nullable: true })
  @Max(5)
  @Min(0)
  @IsOptional()
  points?: number;

  @Field(() => String, { defaultValue: todoStatus })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  dueDate?: Date;

  @Field(() => String)
  @IsNotEmpty()
  userId: string;

  @Field(() => Int)
  complexId: number;

  @Field(() => GraphQLISODateTime, { nullable: true })
  completedDate?: Date;
}
