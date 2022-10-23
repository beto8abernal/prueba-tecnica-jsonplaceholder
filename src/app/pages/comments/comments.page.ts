import { Comment } from './../../models/comment.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.css']
})
export class CommentsPage implements OnInit {

  LosComentarios: Comment[] = [];

  constructor(private route: ActivatedRoute, private commentsService: CommentService) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getComentarios(Number(id));
      }
    });
  }

  ngOnInit() {

  }

  getComentarios(id: number) {
    this.commentsService.getCommentsByPostId(id)
      .subscribe((resultado) => {

        this.LosComentarios = resultado;

      });
  }

}
