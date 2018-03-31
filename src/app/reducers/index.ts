import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import {
  State as FirebaseState,
  reducer as firebaseReducer
} from '../core/firebase-to-store/firebase-to-store.reducer';
import { DBSchema } from '@ioatt/types';

export interface State {
  firebaseState: FirebaseState;
}

export const reducers: ActionReducerMap<State> = {
  firebaseState: firebaseReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
