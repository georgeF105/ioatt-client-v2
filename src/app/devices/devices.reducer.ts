import { Action } from '@ngrx/store';
import { DevicesActions, DevicesActionTypes, GetDevicesSuccess } from './devices.actions';
import { Device } from '@ioatt/types';

export interface State {
  [key: string]: Device;
}

export const initialState: State = {
};

export function reducer(state = initialState, action: DevicesActions): State {
  switch (action.type) {

    case DevicesActionTypes.GetDevicesSuccessAction:
      const devicesMap = action.devices.reduce((devices, device) => {
        devices[device.id] = device;
        return devices;
      }, {});
      return devicesMap;

    default:
      return state;
  }
}
