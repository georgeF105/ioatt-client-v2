import { Action } from '@ngrx/store';

export enum DevicesActionTypes {
  DevicesAction = '[Devices] Action'
}

export class Devices implements Action {
  readonly type = DevicesActionTypes.DevicesAction;
}

export type DevicesActions = Devices;
