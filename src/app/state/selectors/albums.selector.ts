import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { AlbumState } from '../../models/album.model';

export const selectAlbums = (state: AppState) => state.albumsList;

export const selectListAlbums = createSelector(
  selectAlbums, (state: AlbumState ) => state.albums
)
