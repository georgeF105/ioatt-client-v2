import { Action } from '@ngrx/store';
import { Device } from '@ioatt/types';

export enum DevicesActionTypes {
  GetDevicesAction = '[Devices] get devices',
  GetDevicesSuccessAction = '[Devices] get devices success'
}

export class GetDevices implements Action {
  readonly type = DevicesActionTypes.GetDevicesAction;
}

export class GetDevicesSuccess implements Action {
  readonly type = DevicesActionTypes.GetDevicesSuccessAction;
  constructor (
    public devices: Array<Device>
  ) { }
}

export type DevicesActions = GetDevices | GetDevicesSuccess;
