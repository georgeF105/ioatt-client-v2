import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseToStoreService } from './firebase-to-store.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FirebaseToStoreService,
    AngularFireDatabase
  ]
})
export class FirebaseToStoreModule { }
