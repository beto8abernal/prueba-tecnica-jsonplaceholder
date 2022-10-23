import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { buscarPosts } from '../../state/actions/posts.actions';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.css']
})
export class PostsPage implements OnInit {

  idUser: string = '';

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  onChangeUserID() {
    this.store.dispatch(buscarPosts({ userId: this.idUser }));
  }

}
