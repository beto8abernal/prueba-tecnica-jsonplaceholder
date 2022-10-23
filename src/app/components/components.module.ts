import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioAlbumsComponent } from './usuario-albums/usuario-albums.component';
import { UsuarioPostsComponent } from './usuario-posts/usuario-posts.component';;
import { ComentariosPostComponent } from './comentarios-post/comentarios-post.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioAlbumsComponent,
    UsuarioPostsComponent,
    ComentariosPostComponent
  ],
  exports:[
    UsuariosComponent,
    UsuarioAlbumsComponent,
    UsuarioPostsComponent,
    ComentariosPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
