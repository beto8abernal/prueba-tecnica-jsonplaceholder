import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from '../../services/user.service';

@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[Usuarios List] Load Users'),
    mergeMap(() => this.userService.getUsers()
      .pipe(
        map(users => ({ type: '[Usuarios List] Loaded users success', users: users })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
}
