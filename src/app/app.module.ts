import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';

// state
import { ROOT_REDUCERS } from './state/app.state';

// Effets
import { UsersEffects } from './state/effects/users.effects';
import { AlbumsEffects } from './state/effects/albums.effects';
import { PostsEffects } from './state/effects/posts.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name:'TEST', logOnly: environment.production }),
    EffectsModule.forRoot([UsersEffects, AlbumsEffects, PostsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
