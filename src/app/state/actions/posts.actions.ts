import { createAction, props } from '@ngrx/store';

import { Post } from './../../models/post.model';

export const buscarPosts = createAction(
  '[Posts buscar] buscar Posts',
  props<{ userId: string }>()
);

export const loadedPosts = createAction(
  '[Posts List] Loaded posts success',
  props<{ posts: Post[] }>()
)
