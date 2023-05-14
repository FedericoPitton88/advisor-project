import { createSelector } from '@ngrx/store';
import { authState } from '../data.state';

const loginRegisterState = createSelector(
  authState,
  (state) => state.loginRegisterState
);

const loading = createSelector(loginRegisterState, (state) => state?.loading);
const error = createSelector(loginRegisterState, (state) => state.fatalError);
const user = createSelector(loginRegisterState, (state) => state?.user);

const isAuthenticated = createSelector(loginRegisterState, (state) => {
  return state ?
          state.user ? true : false
        : false
});

const getToken = createSelector(loginRegisterState, (state) => {
  return state.user ? state.user.userToken : null;
});

export const LoginRegisterSelectors = {
  loading,
  error,
  user,
  isAuthenticated,
  getToken
};
