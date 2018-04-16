import { Action } from '@ngrx/store';
import { UserActionTypes, UserActions, LogIn, LogInSuccess, LogInError, LogOut } from './user.actions';
import { User } from '@ioatt/types';

export interface State {
  user?: User;
  isLoading: boolean;
  error?: Error;
}

export const initialState: State = {
  isLoading: false
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {
    case UserActionTypes.LogInAction:
      return LogInHandler(action);
    case UserActionTypes.LogInSuccessAction:
      return LogInSuccessHandler(<LogInSuccess>action);
    case UserActionTypes.LogInErrorAction:
      return LogInErrorHandler(<LogInError>action);
    case UserActionTypes.LogOutAction:
      return LogOutAction(<LogOut>action);
    default:
      return state;
  }
}

function LogInHandler (action: LogIn): State {
  return {
    isLoading: true
  };
}

function LogInSuccessHandler (action: LogInSuccess): State {
  return {
    user: action.user,
    isLoading: false
  };
}

function LogInErrorHandler (action: LogInError): State {
  return {
    isLoading: false,
    error: action.error
  };
}

function LogOutAction (action: LogOut): State {
  return {
    user: null,
    isLoading: false
  };
}
