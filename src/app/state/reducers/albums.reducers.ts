import { createReducer, on } from '@ngrx/store';

import { AlbumState } from '../../models/album.model';
import { loadedAlbums, buscarAlbum } from '../actions/album.actions';

export const initialState: AlbumState = { albums: [] }

export const albumsReducer = createReducer(
  initialState,
  on(buscarAlbum, (state) => {
    return { ...state }
  }),
  on(loadedAlbums, (state, { albums }) => {
    return { ...state, albums: albums }
  })
);
