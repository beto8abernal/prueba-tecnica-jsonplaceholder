import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// models
import { Album } from './../models/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbumsByUser(userId: number): Observable<Array<Album>> {

    return this.http
      .get<any>(
        `http://jsonplaceholder.typicode.com/user/${userId}/albums`
      )
      .pipe((resultado) => resultado);
  }

}
