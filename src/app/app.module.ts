import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ShellModule } from './shell/shell.module';
import { EffectsModule } from '@ngrx/effects';

import { AngularFireModule } from 'angularfire2';
import { FirebaseToStoreModule } from './core/firebase-to-store/firebase-to-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    ShellModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirebaseToStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
