import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { AlbumService } from '../../services/album.service';

@Injectable()
export class AlbumsEffects {

  loadAlbumsUser$ = createEffect(() => this.actions$.pipe(
    ofType('[Albums buscar] buscar Albums'),
    mergeMap((action: any) => this.albumService.getAlbumsByUser(action.userId)
      .pipe(
        map(albums => ({ type: '[Albums List] Loaded albums success', albums: albums })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private albumService: AlbumService
  ) { }
}
