import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DevicesActions, DevicesActionTypes, GetDevicesSuccess } from './devices.actions';
import { Device } from '@ioatt/types';

import 'rxjs/add/operator/map';

const dummyDevices: Array<Device> = [
  {
    id: 'dummyDevice01',
    name: 'dummy device 01',
    type: 'switch',
    state: true
  }
];

@Injectable()
export class DevicesEffects {

  @Effect()
  effect$ = this.actions$.ofType(DevicesActionTypes.GetDevicesAction)
    .map(action => {
      return new GetDevicesSuccess(dummyDevices);
    });

  constructor(private actions$: Actions) {}
}
