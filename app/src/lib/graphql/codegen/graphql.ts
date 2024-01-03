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

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateHabitInput = {
  current_frequency?: InputMaybe<Scalars['Int']['input']>;
  difficulty: Scalars['String']['input'];
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  /** If habit is paused it doesnt list as active habit */
  is_paused: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  points?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  target_frequency?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateHabitLogInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  habit_id: Scalars['String']['input'];
  is_completed?: Scalars['Boolean']['input'];
  is_target_completed?: Scalars['Boolean']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateTaskInput = {
  completed_date?: InputMaybe<Scalars['DateTime']['input']>;
  difficulty: Scalars['String']['input'];
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  status?: Scalars['String']['input'];
  title: Scalars['String']['input'];
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

export type DeleteHabitLogInput = {
  habit_id: Scalars['String']['input'];
};

export type DeleteInput = {
  habit_id: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type DeleteManyInput = {
  ids: Array<Scalars['String']['input']>;
};

export type Habit = {
  __typename?: 'Habit';
  completions: Scalars['Int']['output'];
  created_at: Scalars['DateTime']['output'];
  current_frequency?: Maybe<Scalars['Int']['output']>;
  difficulty: Scalars['String']['output'];
  due_date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  is_completed: Scalars['Boolean']['output'];
  is_paused: Scalars['Boolean']['output'];
  is_target_completed: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  points_scored: Scalars['Int']['output'];
  start_date?: Maybe<Scalars['DateTime']['output']>;
  target_frequency?: Maybe<Scalars['Int']['output']>;
  updated_at: Scalars['DateTime']['output'];
  user_id: User;
};

export type HabitLog = {
  __typename?: 'HabitLog';
  date: Scalars['DateTime']['output'];
  habit_id: User;
  id: Scalars['String']['output'];
  is_completed: Scalars['Boolean']['output'];
  is_target_completed: Scalars['Boolean']['output'];
  notes: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
};

export type HabitLogOrderByWithRelationInput = {
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_completed?: InputMaybe<SortOrder>;
  is_target_completed?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
};

export type HabitLogWhereInput = {
  AND?: InputMaybe<Array<HabitLogWhereInput>>;
  NOT?: InputMaybe<Array<HabitLogWhereInput>>;
  OR?: InputMaybe<Array<HabitLogWhereInput>>;
  date?: InputMaybe<DateTimeFilter>;
  habit_id?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  is_completed?: InputMaybe<BoolFilter>;
  notes?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
};

export type HabitLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type HabitOrderByWithRelationInput = {
  created_at?: InputMaybe<SortOrder>;
  current_frequency?: InputMaybe<SortOrder>;
  difficulty?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  is_paused?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  target_frequency?: InputMaybe<SortOrder>;
};

export type HabitWhereInput = {
  AND?: InputMaybe<Array<HabitWhereInput>>;
  NOT?: InputMaybe<Array<HabitWhereInput>>;
  OR?: InputMaybe<Array<HabitWhereInput>>;
  created_at?: InputMaybe<DateTimeFilter>;
  current_frequency?: InputMaybe<IntFilter>;
  difficulty?: InputMaybe<StringFilter>;
  due_date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  is_paused?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
  start_date?: InputMaybe<DateTimeFilter>;
  target_frequency?: InputMaybe<IntFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type HabitWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
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
  createHabitLog: HabitLog;
  createTask: Task;
  createUser: User;
  deleteHabit: Habit;
  deleteHabitLog: HabitLog;
  deleteHabitLogs: Scalars['Float']['output'];
  deleteHabits: Scalars['Float']['output'];
  deleteTask: Task;
  logout: LogoutResponse;
  newTokens: NewTokensResponse;
  signin: SignResponse;
  signup: SignResponse;
  updateHabit: Habit;
  updateHabitLog: HabitLog;
  updateTask: Task;
};


export type MutationCreateHabitArgs = {
  createHabitInput: CreateHabitInput;
};


export type MutationCreateHabitLogArgs = {
  createHabitLogInput: CreateHabitLogInput;
};


export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteHabitArgs = {
  deleteHabitInput: DeleteInput;
};


export type MutationDeleteHabitLogArgs = {
  deleteHabitLogInput: DeleteHabitLogInput;
};


export type MutationDeleteHabitLogsArgs = {
  deleteHabitLogsInput: DeleteManyInput;
};


export type MutationDeleteHabitsArgs = {
  deleteHabitsInput: DeleteManyInput;
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


export type MutationUpdateHabitLogArgs = {
  updateHabitLogInput: UpdateHabitLogInput;
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
  habitLog: HabitLog;
  habitLogs: Array<HabitLog>;
  habits: Array<Habit>;
  task: Task;
  tasks: Array<Task>;
  user: User;
};


export type QueryGetWeeklyPointsArgs = {
  dateEnd: Scalars['DateTime']['input'];
  dateStart: Scalars['DateTime']['input'];
};


export type QueryHabitArgs = {
  where?: InputMaybe<HabitWhereUniqueInput>;
};


export type QueryHabitLogArgs = {
  where?: InputMaybe<HabitLogWhereUniqueInput>;
};


export type QueryHabitLogsArgs = {
  cursor?: InputMaybe<HabitLogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<HabitLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<HabitLogWhereInput>;
};


export type QueryHabitsArgs = {
  cursor?: InputMaybe<HabitWhereUniqueInput>;
  orderBy?: InputMaybe<Array<HabitOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Float']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
  where?: InputMaybe<HabitWhereInput>;
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
  completed_date?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  difficulty: Scalars['String']['output'];
  due_date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  user_id: User;
};

export type TaskOrderByWithRelationInput = {
  completed_date?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
  difficulty?: InputMaybe<SortOrder>;
  due_date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  completed_date?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  difficulty?: InputMaybe<StringFilter>;
  due_date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
  status?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  user_id?: InputMaybe<StringFilter>;
};

export type TaskWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHabitInput = {
  current_frequency?: InputMaybe<Scalars['Int']['input']>;
  difficulty: Scalars['String']['input'];
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  /** If habit is paused it doesnt list as active habit */
  is_paused: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  points?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  target_frequency?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateHabitLogInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  habit_id?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  is_completed?: InputMaybe<Scalars['Boolean']['input']>;
  is_target_completed?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTaskInput = {
  completed_date?: InputMaybe<Scalars['DateTime']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  due_date?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  points?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type WeeklyPoints = {
  __typename?: 'WeeklyPoints';
  points: Scalars['Int']['output'];
  pointsAverage: Scalars['Float']['output'];
};

export type SignInMutationVariables = Exact<{
  signInInput: SigninInput;
}>;


export type SignInMutation = { __typename?: 'Mutation', signin: { __typename?: 'SignResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, name: string, email: string } } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', newTokens: { __typename?: 'NewTokensResponse', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, name: string, email: string } } };

export type CreateHabitMutationVariables = Exact<{
  createHabitInput: CreateHabitInput;
}>;


export type CreateHabitMutation = { __typename?: 'Mutation', createHabit: { __typename?: 'Habit', id: string, name: string, difficulty: string, start_date?: any | null, due_date?: any | null, target_frequency?: number | null, current_frequency?: number | null, is_paused: boolean, points?: number | null, created_at: any, updated_at: any, completions: number, is_completed: boolean, is_target_completed: boolean, points_scored: number, user_id: { __typename?: 'User', id: string, name: string, email: string } } };

export type DeleteHabitsMutationVariables = Exact<{
  deleteHabitsInput: DeleteManyInput;
}>;


export type DeleteHabitsMutation = { __typename?: 'Mutation', deleteHabits: number };

export type UpdateHabitMutationVariables = Exact<{
  updateHabitInput: UpdateHabitInput;
}>;


export type UpdateHabitMutation = { __typename?: 'Mutation', updateHabit: { __typename?: 'Habit', id: string, name: string, difficulty: string, start_date?: any | null, due_date?: any | null, target_frequency?: number | null, current_frequency?: number | null, is_paused: boolean, points?: number | null, created_at: any, updated_at: any, completions: number, is_completed: boolean, is_target_completed: boolean, points_scored: number, user_id: { __typename?: 'User', id: string, name: string, email: string } } };

export type CreateHabitLogMutationVariables = Exact<{
  createHabitLogInput: CreateHabitLogInput;
}>;


export type CreateHabitLogMutation = { __typename?: 'Mutation', createHabitLog: { __typename?: 'HabitLog', id: string, is_completed: boolean, is_target_completed: boolean, points?: number | null, date: any, habit_id: { __typename?: 'User', id: string } } };

export type DeleteHabitLogMutationVariables = Exact<{
  deleteHabitLogInput: DeleteHabitLogInput;
}>;


export type DeleteHabitLogMutation = { __typename?: 'Mutation', deleteHabitLog: { __typename?: 'HabitLog', id: string } };

export type UserFieldsFragment = { __typename?: 'User', id: string, name: string, email: string };

export type HabitFieldsFragment = { __typename?: 'Habit', id: string, name: string, difficulty: string, start_date?: any | null, due_date?: any | null, target_frequency?: number | null, current_frequency?: number | null, is_paused: boolean, points?: number | null, created_at: any, updated_at: any, completions: number, is_completed: boolean, is_target_completed: boolean, points_scored: number, user_id: { __typename?: 'User', id: string, name: string, email: string } };

export type HabitLogFieldsFragment = { __typename?: 'HabitLog', id: string, is_completed: boolean, is_target_completed: boolean, points?: number | null, date: any, habit_id: { __typename?: 'User', id: string } };

export type TaskFieldsFragment = { __typename?: 'Task', id: string, title: string, status: string, completed_date?: any | null, difficulty: string, created_at: any, updated_at: any };

export type GetHabitsQueryVariables = Exact<{
  where?: InputMaybe<HabitWhereInput>;
  orderBy?: InputMaybe<Array<HabitOrderByWithRelationInput> | HabitOrderByWithRelationInput>;
}>;


export type GetHabitsQuery = { __typename?: 'Query', habits: Array<{ __typename?: 'Habit', id: string, name: string, difficulty: string, start_date?: any | null, due_date?: any | null, target_frequency?: number | null, current_frequency?: number | null, is_paused: boolean, points?: number | null, created_at: any, updated_at: any, completions: number, is_completed: boolean, is_target_completed: boolean, points_scored: number, user_id: { __typename?: 'User', id: string, name: string, email: string } }> };

export type GetTasksQueryVariables = Exact<{
  where?: InputMaybe<TaskWhereInput>;
  orderBy?: InputMaybe<Array<TaskOrderByWithRelationInput> | TaskOrderByWithRelationInput>;
}>;


export type GetTasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, title: string, status: string, completed_date?: any | null, difficulty: string, created_at: any, updated_at: any }> };

export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
export const HabitFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"target_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"current_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"is_paused"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completions"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_target_completed"}},{"kind":"Field","name":{"kind":"Name","value":"points_scored"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<HabitFieldsFragment, unknown>;
export const HabitLogFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitLogFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HabitLog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"habit_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_target_completed"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<HabitLogFieldsFragment, unknown>;
export const TaskFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaskFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"completed_date"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<TaskFieldsFragment, unknown>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SigninInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signinInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signInInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const CreateHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"target_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"current_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"is_paused"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completions"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_target_completed"}},{"kind":"Field","name":{"kind":"Name","value":"points_scored"}}]}}]} as unknown as DocumentNode<CreateHabitMutation, CreateHabitMutationVariables>;
export const DeleteHabitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteHabits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteManyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHabits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHabitsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitsInput"}}}]}]}}]} as unknown as DocumentNode<DeleteHabitsMutation, DeleteHabitsMutationVariables>;
export const UpdateHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"target_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"current_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"is_paused"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completions"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_target_completed"}},{"kind":"Field","name":{"kind":"Name","value":"points_scored"}}]}}]} as unknown as DocumentNode<UpdateHabitMutation, UpdateHabitMutationVariables>;
export const CreateHabitLogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateHabitLog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createHabitLogInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateHabitLogInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHabitLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createHabitLogInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createHabitLogInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitLogFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitLogFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HabitLog"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"habit_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_target_completed"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"date"}}]}}]} as unknown as DocumentNode<CreateHabitLogMutation, CreateHabitLogMutationVariables>;
export const DeleteHabitLogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteHabitLog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitLogInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteHabitLogInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHabitLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHabitLogInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitLogInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteHabitLogMutation, DeleteHabitLogMutationVariables>;
export const GetHabitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHabits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"HabitWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"HabitOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"target_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"current_frequency"}},{"kind":"Field","name":{"kind":"Name","value":"is_paused"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"completions"}},{"kind":"Field","name":{"kind":"Name","value":"is_completed"}},{"kind":"Field","name":{"kind":"Name","value":"is_target_completed"}},{"kind":"Field","name":{"kind":"Name","value":"points_scored"}}]}}]} as unknown as DocumentNode<GetHabitsQuery, GetHabitsQueryVariables>;
export const GetTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTasks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TaskOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaskFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaskFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Task"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"completed_date"}},{"kind":"Field","name":{"kind":"Name","value":"difficulty"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<GetTasksQuery, GetTasksQueryVariables>;