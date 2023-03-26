import { createSelector } from '@ngrx/store';
import { authState } from '../data.state';

const loginRegisterState = createSelector(
  authState,
  (state) => state.loginRegisterState
);

const loading = createSelector(loginRegisterState, (state) => state.loading);
const error = createSelector(loginRegisterState, (state) => state.error);
const user = createSelector(loginRegisterState, (state) => state.user);

export const LoginRegisterSelectors = {
  loading,
  error,
  user
};
