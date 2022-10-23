import { createReducer, on } from '@ngrx/store';

import { PostState } from '../../models/post.model';
import { buscarPosts, loadedPosts } from '../actions/posts.actions';

export const initialState: PostState = { posts: [] }

export const postsReducer = createReducer(
  initialState,
  on(buscarPosts, (state) => {
    return { ...state }
  }),
  on(loadedPosts, (state, { posts }) => {
    return { ...state, posts: posts }
  })
);
