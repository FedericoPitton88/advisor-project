import { ActionReducerMap } from "@ngrx/store/src";
import { loginRegisterReducer } from "./auth/auth.reducer";
import { IAuthState } from "./data.state";

export const authReducer: ActionReducerMap<IAuthState> = {
  loginRegisterState: loginRegisterReducer
};
