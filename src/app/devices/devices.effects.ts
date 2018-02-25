import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DevicesActions, DevicesActionTypes } from './devices.actions';

@Injectable()
export class DevicesEffects {

  @Effect()
  effect$ = this.actions$.ofType(DevicesActionTypes.DevicesAction);

  constructor(private actions$: Actions) {}
}
