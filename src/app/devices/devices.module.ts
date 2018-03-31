import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FirebaseToStoreModule } from '../core/firebase-to-store/firebase-to-store.module';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule
  ],
  declarations: [DevicesComponent]
})
export class DevicesModule { }
