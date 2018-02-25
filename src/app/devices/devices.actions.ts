import { Action } from '@ngrx/store';

export enum DevicesActionTypes {
  GetDevicesAction = '[Devices] get',
  GetDevicesActionSuccess = '[Devices] get success'
}

export class GetDevices implements Action {
  readonly type = DevicesActionTypes.GetDevicesAction;
}

export class GetDevicesSuccess implements Action {
  readonly type = DevicesActionTypes.GetDevicesAction;
}

export type DevicesActions = Devices;
