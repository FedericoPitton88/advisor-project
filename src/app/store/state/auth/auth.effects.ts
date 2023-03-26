import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from "rxjs";
import { DataAccessService } from '../../services/data-access.service';
import { LoginRegisterActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: DataAccessService){}

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(LoginRegisterActions.postLogin),
    switchMap((action) => this.authService.login(action.userName, action.password).pipe(
      map((user: any) => LoginRegisterActions.postLoginSuccess({user}))
    ))
  ))
}
