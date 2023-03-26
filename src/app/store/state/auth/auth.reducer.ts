import { Action, createReducer, on } from '@ngrx/store';
import { ILoginRegisterState } from './auth.state';
import { LoginRegisterActions } from './auth.actions';

const initialLoginRegisterState: ILoginRegisterState = {
  userName: '',
  password: '',
  loading: false,
  error: '',
  user: {},
};

const reducer = createReducer(
  initialLoginRegisterState,
  on(LoginRegisterActions.postLoginSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  }))
);

export function loginRegisterReducer(
  state: ILoginRegisterState | undefined,
  action: Action
) {
  return reducer(state, action);
}
