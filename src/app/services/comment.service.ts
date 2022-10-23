import { Comment } from './../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentsByPostId(postId: number): Observable<Comment[]> {
    return this.http
      .get<any>(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      )
      .pipe((resultado) => resultado);
  }

}
