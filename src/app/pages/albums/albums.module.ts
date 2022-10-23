import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AlbumsPage } from './albums.page';
import { AlbumsPageRoutingModule } from './albums-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlbumsPageRoutingModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [AlbumsPage]
})
export class AlbumsPageModule {}
