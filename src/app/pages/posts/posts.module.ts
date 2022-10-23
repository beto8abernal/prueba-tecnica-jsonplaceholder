import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostsPage } from './posts.page';
import { PostPageRoutingModule } from './posts-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PostPageRoutingModule,
    RouterModule,
    FormsModule,
    ComponentsModule
  ],
  declarations: [PostsPage]
})
export class PostsPageModule { }
