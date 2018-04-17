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
import { State as UserState, reducer as UserReducer } from '../core/user/user.reducer';
import { DBSchema } from '@ioatt/types';

export interface State {
  user: UserState;
  firebaseState: FirebaseState;
}

export const reducers: ActionReducerMap<State> = {
  firebaseState: firebaseReducer,
  user: UserReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
