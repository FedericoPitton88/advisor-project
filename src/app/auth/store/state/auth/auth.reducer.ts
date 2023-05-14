import { Action, createReducer, on } from '@ngrx/store';
import { ILoginRegisterState } from './auth.state';
import { LoginRegisterActions } from './auth.actions';

const initialLoginRegisterState: ILoginRegisterState = {
  email: '',
  password: '',
  loading: false,
  fatalError: null,
  user: null,
};

const reducer = createReducer(
  initialLoginRegisterState,
  on(LoginRegisterActions.postLoginSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  })),
  on(LoginRegisterActions.postRegisterSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  })),
  on(LoginRegisterActions.startLoading, (state) => ({
    ...state,
    loading: true
  })),
  on(LoginRegisterActions.logoutSuccess, (state) => ({
    ...state,
    loading: false,
    fatalError: null,
    user: null
  })),
  on(LoginRegisterActions.postLoginFailure, (state, { error }) => ({
    ...state,
    loading: false,
    fatalError: error
  })),
  on(LoginRegisterActions.postRegisterFailure, (state, { error }) => ({
    ...state,
    loading: false,
    fatalError: error
}))
);

export function loginRegisterReducer(
  state: ILoginRegisterState | undefined,
  action: Action
) {
  return reducer(state, action);
}
