import { Action } from '@ngrx/store';

export enum FirebaseToStoreActionTypes {
  ListUpdatedAction = '[FirebaseToStore] list updated'
}

export class ListUpdated implements Action {
  readonly type = FirebaseToStoreActionTypes.ListUpdatedAction;
  constructor (
    public name: string,
    public items: Array<any>
  ) { }
}

export type FirebaseToStoreActions = ListUpdated;
