import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UserActions, UserActionTypes, LogIn, LogInSuccess } from './user.actions';
import { User } from '@ioatt/types';

import 'rxjs/add/operator/map';

const dummyUser: User = {
  id: '123',
  name: 'dummy user',
  email: 'dummy.user@test.com'
};

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions
  ) {}

  @Effect()
  effect$ = this.actions$.ofType(UserActionTypes.LogInAction)
    .map(() => new LogInSuccess(dummyUser));
}
