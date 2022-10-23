import { createAction, props } from '@ngrx/store';

import { Album } from './../../models/album.model';

export const buscarAlbum = createAction(
  '[Albums buscar] buscar Albums',
  props<{ userId: string }>()
);

export const loadedAlbums = createAction(
  '[Albums List] Loaded albums success',
  props<{ albums: Album[] }>()
)
