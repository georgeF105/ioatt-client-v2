import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './devices.reducer';
import { GetDevices } from './devices.actions';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  constructor(
    private _store: Store<State>
  ) { }

  ngOnInit() {
    console.log('here');
    this._store.dispatch(new GetDevices());
  }

}
