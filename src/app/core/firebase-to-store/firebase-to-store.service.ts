import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Device } from '@ioatt/types';
import { ListUpdated } from './firebase-to-store.actions';
import { tap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';

@Injectable()
export class FirebaseToStoreService {
  constructor(
    private firebaseDB: AngularFireDatabase,
    private _store: Store<State>
  ) { }

  public getItems (name: string): Observable<Device[]> {
    return this.firebaseDB.list<Device>(name).snapshotChanges().pipe(
      map(snapshots => snapshots.map(snapshot => {
        return {
          ...snapshot.payload.val(),
          id: snapshot.key
        };
      })),
      tap(items => this._store.dispatch(new ListUpdated(name, items)))
    );
  }
}
