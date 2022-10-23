import { createReducer, on } from '@ngrx/store';

import { User, UserState } from '../../models/user.model';
import { loadUsers, loadedUsers } from '../actions/users.actions';

export const initialState: UserState = { loading: false, users: [] }

export const usersReducer = createReducer(
  initialState,
  on(loadUsers, (state) => {
    return { ...state, loading: true }
  }),
  on(loadedUsers, (state, { users }) => {
    return { ...state, loading: false, users: users }
  })
);
