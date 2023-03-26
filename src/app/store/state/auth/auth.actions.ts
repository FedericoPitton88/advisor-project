import { createAction, props } from "@ngrx/store";

const loginActionKey = '[Auth Login]';

const postLogin = createAction(`${loginActionKey} Post login`, props<{ userName: string, password: string }>())
const postLoginSuccess = createAction(`${loginActionKey} Get login Success`, props<{ user: any }>());
const postLoginFailure = createAction(`${loginActionKey} Get login Failure`, props<{ error: string }>());

export const PublicLoginRegisterActions = {
  postLogin
}

export const LoginRegisterActions = {
  ...PublicLoginRegisterActions,
  postLoginSuccess,
  postLoginFailure
}
