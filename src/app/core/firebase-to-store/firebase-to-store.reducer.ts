import { Action } from '@ngrx/store';
import { FirebaseToStoreActions, FirebaseToStoreActionTypes, ListUpdated } from './firebase-to-store.actions';
import { Device } from '@ioatt/types';

export interface State {
  [key: string]: any;
}

export const initialState: State = {
};

export function reducer(state = initialState, action: FirebaseToStoreActions): State {
  switch (action.type) {

    case FirebaseToStoreActionTypes.ListUpdatedAction:
      const itemMap = action.items.reduce((devices, device) => {
        devices[device.id] = device;
        return devices;
      }, {});
      return {
        ...state,
        [action.name]: itemMap
      };

    default:
      return state;
  }
}
