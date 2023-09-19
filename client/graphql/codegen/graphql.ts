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

export type Mutation = {
  __typename?: 'Mutation';
  createHabit: Habit;
  createHabitTracking: HabitTracking;
  createUser: User;
  deleteHabit: Habit;
  deleteHabits: Scalars['Float']['output'];
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
  deleteHabitInput: DeleteHabitInput;
};


export type MutationDeleteHabitsArgs = {
  deleteHabitsInput: DeleteHabitsInput;
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
  dateEnd?: InputMaybe<Scalars['DateTime']['input']>;
  dateStart?: InputMaybe<Scalars['DateTime']['input']>;
};


export type QueryHabitsArgs = {
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  isPaused?: InputMaybe<Scalars['Boolean']['input']>;
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


export type UpsertHabitTrackingMutation = { __typename?: 'Mutation', createHabitTracking: { __typename?: 'HabitTracking', id: string, date: any, points: number } };

export type HabitFieldsFragment = { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any };

export type HabitTrackingFieldsFragment = { __typename?: 'HabitTracking', id: string, points: number, date: any, habitId: { __typename?: 'Habit', id: string, name: string, isPaused: boolean, dueDate?: any | null, createdAt: any, updatedAt: any } };

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

export const HabitFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<HabitFieldsFragment, unknown>;
export const HabitTrackingFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitTrackingFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HabitTracking"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"habitId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<HabitTrackingFieldsFragment, unknown>;
export const CreateHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateHabitMutation, CreateHabitMutationVariables>;
export const UpdateHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpdateHabitMutation, UpdateHabitMutationVariables>;
export const DeleteHabitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteHabit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteHabitInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHabit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHabitInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteHabitMutation, DeleteHabitMutationVariables>;
export const DeleteHabitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteHabits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteHabitsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteHabits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"deleteHabitsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteHabitsInput"}}}]}]}}]} as unknown as DocumentNode<DeleteHabitsMutation, DeleteHabitsMutationVariables>;
export const UpsertHabitTrackingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpsertHabitTracking"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateHabitTrackingInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createHabitTracking"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createHabitTrackingInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"points"}}]}}]}}]} as unknown as DocumentNode<UpsertHabitTrackingMutation, UpsertHabitTrackingMutationVariables>;
export const GetHabitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHabits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isPaused"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dueDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"isPaused"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isPaused"}}},{"kind":"Argument","name":{"kind":"Name","value":"dueDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dueDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetHabitsQuery, GetHabitsQueryVariables>;
export const GetHabitTrackingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHabitTrackings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"habitTrackings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateStart"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateStart"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateEnd"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateEnd"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitTrackingFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Habit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"isPaused"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HabitTrackingFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HabitTracking"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"points"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"habitId"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HabitFields"}}]}}]}}]} as unknown as DocumentNode<GetHabitTrackingsQuery, GetHabitTrackingsQueryVariables>;