import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { UserService } from '../../services/user.service';

@Injectable()
export class PostsEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType('[Posts buscar] buscar Posts'),
    mergeMap((action: any) => this.userService.getPostsByUserId(action.userId)
      .pipe(
        map(posts => ({ type: '[Posts List] Loaded posts success', posts: posts })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
}
