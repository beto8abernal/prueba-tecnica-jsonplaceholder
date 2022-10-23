import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { loadUsers } from '../../state/actions/users.actions';
import { Observable } from 'rxjs';
import { selectUsersLoading } from '../../state/selectors/users.selectors';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.css']
})
export class UsersPage implements OnInit {

  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.loading$ = this.store.select(selectUsersLoading);
    this.store.dispatch(loadUsers());
  }

}
