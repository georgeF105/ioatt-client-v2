import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { FirebaseToStoreService } from '../core/firebase-to-store/firebase-to-store.service';
import { LogIn } from '../core/user/user.actions';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor(
    private _store: Store<State>,
    private _firebaseToStoreService: FirebaseToStoreService
  ) { }

  ngOnInit() {
    console.log('here');
    this._firebaseToStoreService.getItems('devices').subscribe();
    this._firebaseToStoreService.getItems('sensors').subscribe();
    this._store.dispatch(new LogIn());
    console.log('here2');
  }

}
