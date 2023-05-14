import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interface/user.models';

const loginActionKey = '[Auth Login]';

const postLogin = createAction(`${loginActionKey} Post login`, props<{ email: string; password: string }>());
const postLoginSuccess = createAction(`${loginActionKey} Post login Success`, props<{ user: User | null }>());
const postLoginFailure = createAction(`${loginActionKey} Get login Failure`, props<{ error: HttpErrorResponse }>());

const postRegister = createAction(`${loginActionKey} Post register`, props<{ email: string; password: string }>());
const postRegisterSuccess = createAction(`${loginActionKey} Get register Success`, props<{ user: User }>());
const postRegisterFailure = createAction(`${loginActionKey} Get register Failure`, props<{ error: HttpErrorResponse }>());

const sendLogout = createAction(`${loginActionKey} Send logout`);
const logoutSuccess = createAction(`${loginActionKey} Logout success`);

const autoLogin = createAction(`${loginActionKey} Auto login`);

const startLoading = createAction(`${loginActionKey} Set loading`);

export const PublicLoginRegisterActions = {
  postLogin,
  postRegister,
  startLoading,
  sendLogout,
  autoLogin
};

export const LoginRegisterActions = {
  ...PublicLoginRegisterActions,
  postLoginSuccess,
  postLoginFailure,
  postRegisterSuccess,
  postRegisterFailure,
  logoutSuccess
};
