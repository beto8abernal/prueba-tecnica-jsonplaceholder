import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UsersPage } from './users.page';
import { UsersPageRoutingModule } from './users-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    UsersPageRoutingModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [UsersPage]
})
export class UsersPageModule { }
