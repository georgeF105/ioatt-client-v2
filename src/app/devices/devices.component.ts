import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { FirebaseToStoreService } from '../core/firebase-to-store/firebase-to-store.service';

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
  }

}
