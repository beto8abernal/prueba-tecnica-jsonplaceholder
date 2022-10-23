import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// models
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {

    return this.http
      .get<any>(
        'https://jsonplaceholder.typicode.com/users'
      )
      .pipe((resultado) => resultado);
  }

  getPostsByUserId(userId: number): Observable<Array<Post>> {
    return this.http
      .get<any>(
        `http://jsonplaceholder.typicode.com/user/${userId}/posts`
      )
      .pipe((resultado) => resultado);
  }

}
