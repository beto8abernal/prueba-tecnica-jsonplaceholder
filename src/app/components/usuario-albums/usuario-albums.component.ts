import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';

import { selectListAlbums } from '../../state/selectors/albums.selector';

@Component({
  selector: 'app-usuario-albums',
  templateUrl: './usuario-albums.component.html',
  styleUrls: ['./usuario-albums.component.css']
})
export class UsuarioAlbumsComponent implements OnInit {


  losAlbums$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.losAlbums$ = this.store.select(selectListAlbums);
  }
}
