import { Action } from '@ngrx/store';
import { DevicesActions, DevicesActionTypes } from './devices.actions';
import { Device } from '@ioatt/types';

export interface State {
  [key: string]: Device;
}

export const initialState: State = {
};

export function reducer(state = initialState, action: DevicesActions): State {
  switch (action.type) {

    case DevicesActionTypes.DevicesAction:
      return state;


    default:
      return state;
  }
}
