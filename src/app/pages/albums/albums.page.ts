import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { buscarAlbum } from '../../state/actions/album.actions';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.css']
})
export class AlbumsPage implements OnInit {
  idUser: string = '';

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  onChangeUserID() {
    this.store.dispatch(buscarAlbum({ userId: this.idUser }));
  }

}
