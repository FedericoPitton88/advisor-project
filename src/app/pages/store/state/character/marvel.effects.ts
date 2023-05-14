import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { exhaustMap, mergeMap, take } from 'rxjs/operators';
import { AuthResponse } from 'src/app/interface/authResponse.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { PagesService } from 'src/app/pages/services/pages.service';
import { CharactersActions } from './marvel.actions';

@Injectable()
export class CharacterEffects {
  constructor(
    private actions$: Actions,
    private pagesService: PagesService,
    private router: Router
  ) {}

  getCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getCharacters),
      exhaustMap((action) => {
        return this.pagesService.getCharacters().pipe(
          map((characters: any) => {
            return CharactersActions.getCharactersSuccess({ characters });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(CharactersActions.getCharactersFailure ({ error }));
          })
        );
      })
    )
  );

  getCharactersDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getChatactersDetails),
      exhaustMap((action) => {
        return this.pagesService.getCharacterDetail(action.id).pipe(
          map((charactersDetail: any) => {
            return CharactersActions.getCharactersDetailsSuccess({ charactersDetail });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(CharactersActions.getCharactersFailure ({ error }));
          })
        );
      })
    )
  );

  getComics$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getComics),
      exhaustMap((action) => {
        return this.pagesService.getComics().pipe(
          map((comics: any) => {
            return CharactersActions.getComicsSuccess({ comics });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(CharactersActions.getComicsFailure ({ error }));
          })
        );
      })
    )
  );

  getComicsDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharactersActions.getComicsDetails),
      exhaustMap((action) => {
        return this.pagesService.getComicsDetail(action.id).pipe(
          map((comicsDetail: any) => {
            return CharactersActions.getComicsDetailsSuccess({ comicsDetail });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(CharactersActions.getComicsFailure ({ error }));
          })
        );
      })
    )
  );

}
