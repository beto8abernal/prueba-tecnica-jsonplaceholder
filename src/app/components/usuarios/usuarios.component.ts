import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectListUSers } from '../../state/selectors/users.selectors';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.usuarios$ = this.store.select(selectListUSers);
  }



}
