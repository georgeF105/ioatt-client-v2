import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { StoreModule } from '@ngrx/store';
import * as fromDevices from './devices.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DevicesEffects } from './devices.effects';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule,
    StoreModule.forFeature('devices', fromDevices.reducer),
    EffectsModule.forFeature([DevicesEffects])
  ],
  declarations: [DevicesComponent]
})
export class DevicesModule { }
