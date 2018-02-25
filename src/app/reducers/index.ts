import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import { State as DevicesState, reducer as devicesReducer } from '../devices/devices.reducer';

export interface State {
  devices: DevicesState;
}

export const reducers: ActionReducerMap<State> = {
  devices: devicesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
