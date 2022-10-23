
import { Component, Input, OnInit } from '@angular/core';
import { Comment } from './../../models/comment.model';

@Component({
  selector: 'app-comentarios-post',
  templateUrl: './comentarios-post.component.html',
  styleUrls: ['./comentarios-post.component.css']
})
export class ComentariosPostComponent implements OnInit {

  @Input() entradaComentarios: Comment[] = [];

  constructor() { }

  ngOnInit() {
  }

}
