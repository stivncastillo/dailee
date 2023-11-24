/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type CreateHabitInput = {
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** If habit is paused it doesnt list as active habit */
  isPaused: Scalars['Boolean']['input'];
  /** Name of habit */
  name: Scalars['String']['input'];
};

export type CreateHabitTrackingInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  habitId: Scalars['String']['input'];
  points: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type CreateTaskInput = {
  completedDate?: InputMaybe<Scalars['DateTime']['input']>;
  complexId: Scalars['Int']['input'];
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  status?: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DeleteHabitInput = {
  id: Scalars['String']['input'];
};

export type DeleteHabitTrackingInput = {
  date: Scalars['DateTime']['input'];
  habitId: Scalars['String']['input'];
};

export type DeleteHabitsInput = {
  ids: Array<Scalars['String']['input']>;
};

export type Habit = {
  __typename?: 'Habit';
  createdAt: Scalars['DateTime']['output'];
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  isPaused: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type HabitTracking = {
  __typename?: 'HabitTracking';
  date: Scalars['DateTime']['output'];
  habitId: Habit;
  id: Scalars['String']['output'];
  points: Scalars['Int']['output'];
  userId: User;
};

export type HabitTrackingAggregate = {
  __typename?: 'HabitTrackingAggregate';
  _avg?: Maybe<HabitTrackingAvgAggregate>;
  _sum?: Maybe<HabitTrackingSumAggregate>;
};

export type HabitTrackingAvgAggregate = {
  __typename?: 'HabitTrackingAvgAggregate';
  points?: Maybe<Scalars['Float']['output']>;
};

export type HabitTrackingSumAggregate = {
  __typename?: 'HabitTrackingSumAggregate';
  points?: Maybe<Scalars['Int']['output']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  loggedOut: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHabit: Habit;
  createHabitTracking: HabitTracking;
  createTask: Task;
  createUser: User;
  deleteHabit: Habit;
  deleteHabitTracking?: Maybe<HabitTracking>;
  deleteHabits: Scalars['Float']['output'];
  deleteTask: Task;
  logout: LogoutResponse;
  newTokens: NewTokensResponse;
  signin: SignResponse;
  signup: SignResponse;
  updateHabit: Habit;
  updateHabitTracking: HabitTracking;
  updateTask: Task;
};


export type MutationCreateHabitArgs = {
  createHabitInput: CreateHabitInput;
};


export type MutationCreateHabitTrackingArgs = {
  createHabitTrackingInput: CreateHabitTrackingInput;
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteHabitArgs = {
  deleteHabitInput: DeleteHabitInput;
};


export type MutationDeleteHabitTrackingArgs = {
  deleteHabitTracking: DeleteHabitTrackingInput;
};


export type MutationDeleteHabitsArgs = {
  deleteHabitsInput: DeleteHabitsInput;
};


export type MutationDeleteTaskArgs = {
  where?: InputMaybe<TaskWhereUniqueInput>;
};


export type MutationLogoutArgs = {
  id: Scalars['String']['input'];
};


export type MutationSigninArgs = {
  signinInput: SigninInput;
};


export type MutationSignupArgs = {
  signupInput: SignupInput;
};


export type MutationUpdateHabitArgs = {
  updateHabitInput: UpdateHabitInput;
};


export type MutationUpdateHabitTrackingArgs = {
  updateHabitTrackingInput: UpdateHabitTrackingInput;
};


export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};

export type NewTokensResponse = {
  __typename?: 'NewTokensResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  getWeeklyPoints: WeeklyPoints;
  habit: Habit;
  habitTracking?: Maybe<HabitTracking>;
  habitTrackings: Array<HabitTracking>;
  habitTrackingsAggregate?: Maybe<HabitTrackingAggregate>;
  habits: Array<Habit>;
  task: Task;
  taskComplexities: Array<TasksComplexity>;
  tasks: Array<Task>;
  user: User;
};


export type QueryGetWeeklyPointsArgs = {
  dateEnd: Scalars['DateTime']['input'];
  dateStart: Scalars['DateTime']['input'];
};


export type QueryHabitArgs = {
  id: Scalars['String']['input'];
};


export type QueryHabitTrackingArgs = {
  id: Scalars['Float']['input'];
};


export type QueryHabitTrackingsArgs = {
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  dateStart?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHabitTrackingsAggregateArgs = {
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  dateStart?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHabitsArgs = {
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  isPaused?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTaskArgs = {
  where?: InputMaybe<TaskWhereUniqueInput>;
};


export type QueryTasksArgs = {
  cursor?: InputMaybe<TaskWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<TaskWhereInput>;
};


export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type SignResponse = {
  __typename?: 'SignResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type SigninInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  completedDate?: Maybe<Scalars['DateTime']['output']>;
  complexId: TasksComplexity;
  createdAt: Scalars['DateTime']['output'];
  dueDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: User;
};

export type TaskOrderByWithRelationInput = {
  completedDate?: InputMaybe<SortOrder>;
  complexity?: InputMaybe<TasksComplexitiesOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  completedDate?: InputMaybe<DateTimeFilter>;
  complexId?: InputMaybe<IntFilter>;
  complexity?: InputMaybe<TasksComplexitiesRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TasksComplexitiesOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
};

export type TasksComplexitiesRelationFilter = {
  is?: InputMaybe<TasksComplexitiesWhereInput>;
  isNot?: InputMaybe<TasksComplexitiesWhereInput>;
};

export type TasksComplexitiesWhereInput = {
  AND?: InputMaybe<Array<TasksComplexitiesWhereInput>>;
  NOT?: InputMaybe<Array<TasksComplexitiesWhereInput>>;
  OR?: InputMaybe<Array<TasksComplexitiesWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
};

export type TasksComplexity = {
  __typename?: 'TasksComplexity';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
};

export type UpdateHabitInput = {
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  isPaused?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHabitTrackingInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  habitId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  points?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateTaskInput = {
  completedDate?: InputMaybe<Scalars['DateTime']['input']>;
  complexId?: InputMaybe<Scalars['Int']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  points?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type WeeklyPoints = {
  __typename?: 'WeeklyPoints';
  points: Scalars['Int']['output'];
  pointsAverage: Scalars['Float']['output'];
};

export type CreateHabitMutationVariables = Exact<{
  createHabitInput: CreateHabitInput;
}>;


export type CreateHabitMutation = { __typename?: 'Mutation', createHabit: { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any } };

export type UpdateHabitMutationVariables = Exact<{
  updateHabitInput: UpdateHabitInput;
}>;


export type UpdateHabitMutation = { __typename?: 'Mutation', updateHabit: { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any } };

export type DeleteHabitMutationVariables = Exact<{
  deleteHabitInput: DeleteHabitInput;
}>;


export type DeleteHabitMutation = { __typename?: 'Mutation', deleteHabit: { __typename?: 'Habit', id: string } };

export type DeleteHabitsMutationVariables = Exact<{
  deleteHabitsInput: DeleteHabitsInput;
}>;


export type DeleteHabitsMutation = { __typename?: 'Mutation', deleteHabits: number };

export type UpsertHabitTrackingMutationVariables = Exact<{
  createInput: CreateHabitTrackingInput;
}>;


export type UpsertHabitTrackingMutation = { __typename?: 'Mutation', createHabitTracking: { __typename?: 'HabitTracking', id: string, points: number, date: any, habitId: { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any } } };

export type DeleteHabitTrackingMutationVariables = Exact<{
  deleteHabitTracking: DeleteHabitTrackingInput;
}>;


export type DeleteHabitTrackingMutation = { __typename?: 'Mutation', deleteHabitTracking?: { __typename?: 'HabitTracking', id: string, points: number, date: any, habitId: { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any } } | null };

export type CreateTaskMutationVariables = Exact<{
  createTaskInput: CreateTaskInput;
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', id: string, title: string, status: string, points?: number | null, dueDate?: any | null, completedDate?: any | null, createdAt: any, updatedAt: any, userId: { __typename?: 'User', id: string, name: string }, complexId: { __typename?: 'TasksComplexity', id: string, name: string, points?: number | null } } };

export type UpdateTaskMutationVariables = Exact<{
  updateTaskInput: UpdateTaskInput;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'Task', id: string, title: string, status: string, points?: number | null, dueDate?: any | null, completedDate?: any | null, createdAt: any, updatedAt: any, userId: { __typename?: 'User', id: string, name: string }, complexId: { __typename?: 'TasksComplexity', id: string, name: string, points?: number | null } } };

export type DeleteTaskMutationVariables = Exact<{
  where?: InputMaybe<TaskWhereUniqueInput>;
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'Task', id: string } };

export type SignInMutationVariables = Exact<{
  signInInput: SigninInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'SignResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, name: string, email: string } } };

export type HabitFieldsFragment = { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any };

export type HabitTrackingFieldsFragment = { __typename?: 'HabitTracking', id: string, points: number, date: any, habitId: { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any } };

export type TasksComplexityFieldsFragment = { __typename?: 'TasksComplexity', id: string, name: string, points?: number | null };

export type TaskFieldsFragment = { __typename?: 'Task', id: string, title: string, status: string, points?: number | null, dueDate?: any | null, completedDate?: any | null, createdAt: any, updatedAt: any, userId: { __typename?: 'User', id: string, name: string }, complexId: { __typename?: 'TasksComplexity', id: string, name: string, points?: number | null } };

export type GetHabitsQueryVariables = Exact<{
  isPaused?: InputMaybe<Scalars['Boolean']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetHabitsQuery = { __typename?: 'Query', habits: Array<{ __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any }> };

export type GetHabitTrackingsQueryVariables = Exact<{
  dateStart?: InputMaybe<Scalars['DateTime']['input']>;
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetHabitTrackingsQuery = { __typename?: 'Query', habitTrackings: Array<{ __typename?: 'HabitTracking', id: string, points: number, date: any, habitId: { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any } }> };

export type GetHabitTrackingAggregateQueryVariables = Exact<{
  dateStart?: InputMaybe<Scalars['DateTime']['input']>;
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type GetHabitTrackingAggregateQuery = { __typename?: 'Query', habitTrackingsAggregate?: { __typename?: 'HabitTrackingAggregate', _avg?: { __typename?: 'HabitTrackingAvgAggregate', points?: number | null } | null, _sum?: { __typename?: 'HabitTrackingSumAggregate', points?: number | null } | null } | null };

export type GetTasksQueryVariables = Exact<{
  where?: InputMaybe<TaskWhereInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput> | TaskOrderByWithRelationInput>;
}>;


export type GetTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title: string, status: string, points?: number | null, dueDate?: any | null, completedDate?: any | null, createdAt: any, updatedAt: any, userId: { __typename?: 'User', id: string, name: string }, complexId: { __typename?: 'TasksComplexity', id: string, name: string, points?: number | null } }> };

export type GetTaskComplexitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTaskComplexitiesQuery = { __typename?: 'Query', taskComplexities: Array<{ __typename?: 'TasksComplexity', id: string, name: string, points?: number | null }> };

export type GetWeeklyPointsQueryVariables = Exact<{
  dateStart: Scalars['DateTime']['input'];
  dateEnd: Scalars['DateTime']['input'];
}>;


export type GetWeeklyPointsQuery = { __typename?: 'Query', getWeeklyPoints: { __typename?: 'WeeklyPoints', points: number, pointsAverage: number } };

export const HabitFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<HabitFieldsFragment, unknown>;
export const HabitTrackingFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitTrackingFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HabitTracking"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"habitId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<HabitTrackingFieldsFragment, unknown>;
export const TasksComplexityFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TasksComplexityFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TasksComplexity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]} as unknown as DocumentNode<TasksComplexityFieldsFragment, unknown>;
export const TaskFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaskFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completedDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"complexId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TasksComplexityFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TasksComplexityFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TasksComplexity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]} as unknown as DocumentNode<TaskFieldsFragment, unknown>;
export const CreateHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateHabitMutation, CreateHabitMutationVariables>;
export const UpdateHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpdateHabitMutation, UpdateHabitMutationVariables>;
export const DeleteHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteHabitMutation, DeleteHabitMutationVariables>;
export const DeleteHabitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteHabits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteHabitsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHabits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHabitsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitsInput"}}}]}]}}]} as unknown as DocumentNode<DeleteHabitsMutation, DeleteHabitsMutationVariables>;
export const UpsertHabitTrackingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertHabitTracking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateHabitTrackingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHabitTracking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createHabitTrackingInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitTrackingFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitTrackingFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HabitTracking"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"habitId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}}]} as unknown as DocumentNode<UpsertHabitTrackingMutation, UpsertHabitTrackingMutationVariables>;
export const DeleteHabitTrackingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteHabitTracking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitTracking"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteHabitTrackingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHabitTracking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHabitTracking"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitTracking"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitTrackingFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitTrackingFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HabitTracking"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"habitId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}}]} as unknown as DocumentNode<DeleteHabitTrackingMutation, DeleteHabitTrackingMutationVariables>;
export const CreateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTaskInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaskInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTaskInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTaskInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaskFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TasksComplexityFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TasksComplexity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaskFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completedDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"complexId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TasksComplexityFields"}}]}}]}}]} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTaskInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateTaskInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateTaskInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaskFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TasksComplexityFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TasksComplexity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaskFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completedDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"complexId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TasksComplexityFields"}}]}}]}}]} as unknown as DocumentNode<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const DeleteTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteTaskMutation, DeleteTaskMutationVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signinInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const GetHabitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHabits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPaused"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dueDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"isPaused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPaused"}}},{"kind":"Argument","name":{"kind":"Name","value":"dueDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dueDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetHabitsQuery, GetHabitsQueryVariables>;
export const GetHabitTrackingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHabitTrackings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habitTrackings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitTrackingFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitTrackingFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HabitTracking"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"habitId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}}]} as unknown as DocumentNode<GetHabitTrackingsQuery, GetHabitTrackingsQueryVariables>;
export const GetHabitTrackingAggregateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHabitTrackingAggregate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habitTrackingsAggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_avg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_sum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]}}]}}]} as unknown as DocumentNode<GetHabitTrackingAggregateQuery, GetHabitTrackingAggregateQueryVariables>;
export const GetTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTasks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaskFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TasksComplexityFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TasksComplexity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaskFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"userId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completedDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"complexId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TasksComplexityFields"}}]}}]}}]} as unknown as DocumentNode<GetTasksQuery, GetTasksQueryVariables>;
export const GetTaskComplexitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaskComplexities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taskComplexities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TasksComplexityFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TasksComplexityFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TasksComplexity"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]} as unknown as DocumentNode<GetTaskComplexitiesQuery, GetTaskComplexitiesQueryVariables>;
export const GetWeeklyPointsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWeeklyPoints"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWeeklyPoints"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"pointsAverage"}}]}}]}}]} as unknown as DocumentNode<GetWeeklyPointsQuery, GetWeeklyPointsQueryVariables>;