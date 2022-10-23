import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { CommentsPageRoutingModule } from './comments-routing.module';
import { CommentsPage } from './comments.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    CommentsPageRoutingModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [CommentsPage]
})
export class CommentsPageModule { }
