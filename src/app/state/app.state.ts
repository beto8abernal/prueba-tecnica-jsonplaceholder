import { ActionReducerMap } from '@ngrx/store';

// state
import { UserState } from '../models/user.model';
import { AlbumState } from '../models/album.model';
import { PostState } from '../models/post.model';

// reducers
import { usersReducer } from './reducers/users.reducers';
import { albumsReducer } from './reducers/albums.reducers';
import { postsReducer } from './reducers/posts.reducers';

export interface AppState {
  usersList: UserState;
  albumsList: AlbumState;
  postsList: PostState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  usersList: usersReducer,
  albumsList: albumsReducer,
  postsList: postsReducer
}
