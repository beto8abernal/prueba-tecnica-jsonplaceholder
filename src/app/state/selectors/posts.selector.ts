import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { PostState } from '../../models/post.model';

export const selectPosts = (state: AppState) => state.postsList;

export const selectListPosts = createSelector(
  selectPosts, (state: PostState ) => state.posts
)
