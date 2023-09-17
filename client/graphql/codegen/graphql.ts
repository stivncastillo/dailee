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

export type CreateUserInput = {
  /** Name of habit */
  name: Scalars['String']['input'];
};

export type DeleteHabitInput = {
  id: Scalars['String']['input'];
};

export type DeleteHabitTrackingInput = {
  id: Scalars['Float']['input'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createHabit: Habit;
  createHabitTracking: HabitTracking;
  createUser: User;
  deleteHabit: Habit;
  removeHabitTracking: HabitTracking;
  removeUser: User;
  updateHabit: Habit;
  updateHabitTracking: HabitTracking;
  updateUser: User;
};


export type MutationCreateHabitArgs = {
  createHabitInput: CreateHabitInput;
};


export type MutationCreateHabitTrackingArgs = {
  createHabitTrackingInput: CreateHabitTrackingInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteHabitArgs = {
  deleteHabitData: DeleteHabitInput;
};


export type MutationRemoveHabitTrackingArgs = {
  deleteHabitTracking: DeleteHabitTrackingInput;
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateHabitArgs = {
  updateHabitInput: UpdateHabitInput;
};


export type MutationUpdateHabitTrackingArgs = {
  updateHabitTrackingInput: UpdateHabitTrackingInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  habit: Habit;
  habitTracking: HabitTracking;
  habitTrackings: Array<HabitTracking>;
  habits: Array<Habit>;
  user: User;
};


export type QueryHabitArgs = {
  id: Scalars['String']['input'];
};


export type QueryHabitTrackingArgs = {
  id: Scalars['Float']['input'];
};


export type QueryHabitTrackingsArgs = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHabitsArgs = {
  isPaused?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
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

export type UpdateUserInput = {
  id: Scalars['Int']['input'];
  /** Name of habit */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CreateHabitMutationVariables = Exact<{
  createHabitInput: CreateHabitInput;
}>;


export type CreateHabitMutation = { __typename?: 'Mutation', createHabit: { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any } };

export type HabitFieldsFragment = { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any };

export type GetHabitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHabitsQuery = { __typename?: 'Query', habits: Array<{ __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any }> };

export const HabitFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<HabitFieldsFragment, unknown>;
export const CreateHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateHabitMutation, CreateHabitMutationVariables>;
export const GetHabitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHabits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetHabitsQuery, GetHabitsQueryVariables>;