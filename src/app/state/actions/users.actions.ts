import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadUsers = createAction(
  '[Usuarios List] Load Users'
);

export const loadedUsers = createAction(
  '[Usuarios List] Loaded users success',
  props<{ users: User[] }>()
)
