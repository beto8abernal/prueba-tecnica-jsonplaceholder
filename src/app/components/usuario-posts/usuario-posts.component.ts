import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../state/app.state';
import { selectListPosts } from '../../state/selectors/posts.selector';
import { Post } from '../../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-posts',
  templateUrl: './usuario-posts.component.html',
  styleUrls: ['./usuario-posts.component.css']
})
export class UsuarioPostsComponent implements OnInit {

  losPosts$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.losPosts$ = this.store.select(selectListPosts);
  }

  onVerComentarios(post: Post){
    const url = `/comments/${post.id}`;
    this.router.navigateByUrl(url);
  }
}
