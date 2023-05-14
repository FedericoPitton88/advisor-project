import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { LoginRegisterActions } from './auth.actions';
import { exhaustMap, mergeMap, take } from 'rxjs/operators';
import { AuthResponse } from 'src/app/interface/authResponse.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataAccessService } from 'src/app/auth/services/data-access.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: DataAccessService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginRegisterActions.postLogin),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          tap((userResponse) => {
            const user = this.authService.formatUser(userResponse);
            localStorage.setItem('user', JSON.stringify(user));
          }),
          map((userResponse: AuthResponse) => {
            const user = this.authService.formatUser(userResponse);
            return LoginRegisterActions.postLoginSuccess({ user });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(LoginRegisterActions.postLoginFailure({ error }));
          })
        );
      })
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginRegisterActions.postRegister),
      //On each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed.
      //mergeMap vs switchMap cancels previous HTTP requests that are still in progress, while mergeMap lets all of them finish.
      //The exhaustMap operator takes care of the first request which comes in and ignores everything which comes in afterwards until the first one came back
      exhaustMap((action) => {
        return this.authService.signUp(action.email, action.password).pipe(
          //Used when you want to affect outside state with a notification without altering the notification. is designed to allow the developer a designated place to perform side effects
          tap((userResponse) => {
            const user = this.authService.formatUser(userResponse);
            localStorage.setItem('user', JSON.stringify(user));
          }),
          map((userResponse: AuthResponse) => {
            const user = this.authService.formatUser(userResponse);
            return LoginRegisterActions.postRegisterSuccess({ user });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(LoginRegisterActions.postRegisterFailure({ error }));
          })
        );
      })
    )
  );

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginRegisterActions.autoLogin),
      mergeMap(() => {
        const user = this.authService.getUserFromLocalStorage();
        return of(LoginRegisterActions.postLoginSuccess({ user }));
      })
    );
  });

  redirectOnLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LoginRegisterActions.postLoginSuccess),
        tap(() => {
          const u = this.authService.getUserFromLocalStorage();
          if (u) this.router.navigate(['/home']);
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LoginRegisterActions.sendLogout),
      map(() => {
        this.authService.logout();
        this.router.navigate(['auth/login']);
        return LoginRegisterActions.logoutSuccess();
      })
    );
  });
}
