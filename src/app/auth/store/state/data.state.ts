import { createFeatureSelector } from "@ngrx/store";
import { ILoginRegisterState } from "./auth/auth.state";

export const AUTH_FEATURE_KEY = 'auth';
export const authState = createFeatureSelector<IAuthState>(AUTH_FEATURE_KEY);


export interface IAuthState {
    loginRegisterState: ILoginRegisterState;
}
