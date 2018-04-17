import { Action } from '@ngrx/store';
import { User } from '@ioatt/types';

export enum UserActionTypes {
  LogInAction = '[User] login success',
  LogInSuccessAction = '[User] login success',
  LogInErrorAction = '[User] login error',
  LogOutAction = '[User] logout'
}

export class LogIn implements Action {
  readonly type = UserActionTypes.LogInAction;
}

export class LogInSuccess implements Action {
  readonly type = UserActionTypes.LogInSuccessAction;
  constructor (
    public user: User
  ) { }
}

export class LogInError implements Action {
  readonly type = UserActionTypes.LogInErrorAction;
  constructor (
    public error: Error
  ) { }
}

export class LogOut implements Action {
  readonly type = UserActionTypes.LogOutAction;
}

export type UserActions = LogIn | LogInSuccess | LogInError | LogOut;
