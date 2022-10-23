import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User, UserState } from '../../models/user.model';
import { AppState } from '../app.state';

export const selectUsers = (state: AppState) => state.usersList;

export const selectListUSers = createSelector(
  selectUsers, (state: UserState ) => state.users
)

export const selectUsersLoading = createSelector(
  selectUsers, (state: UserState ) => state.loading
)
