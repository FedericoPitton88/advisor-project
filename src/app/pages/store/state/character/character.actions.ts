import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

const charactersKey = '[Characters]';

const getCharacters = createAction(`${charactersKey} Get All`);
const getCharactersSuccess = createAction(
  `${charactersKey} Get all Success`,
  props<{ characters: any | null }>()
);
const getCharactersFailure = createAction(
  `${charactersKey} Get all Failure`,
  props<{ error: HttpErrorResponse }>()
);

const getChatactersDetails = createAction(`${charactersKey} Get Detail`, props<{ id: string}>());
const getCharactersDetailsSuccess = createAction(
  `${charactersKey} Get character details Success`,
  props<{ charactersDetail: any | null }>()
);
const getCharactersDetailFailure = createAction(
  `${charactersKey} Get character detail Failure`,
  props<{ error: HttpErrorResponse }>()
);

const getComics = createAction(`${charactersKey} Get All comics`);
const getComicsSuccess = createAction(
  `${charactersKey} Get all comics Success`,
  props<{ comics: any | null }>()
);
const getComicsFailure = createAction(
  `${charactersKey} Get all Comics Failure`,
  props<{ error: HttpErrorResponse }>()
);

const getComicsDetails = createAction(`${charactersKey} Get Detail`, props<{ id: string}>());
const getComicsDetailsSuccess = createAction(
  `${charactersKey} Get comics details Success`,
  props<{ comicsDetail: any | null }>()
);
const getComicsDetailFailure = createAction(
  `${charactersKey} Get comics detail Failure`,
  props<{ error: HttpErrorResponse }>()
);

export const PublicCharactersActions = {
  getCharacters,
  getChatactersDetails,
  getComics,
  getComicsDetails
};

export const CharactersActions = {
  ...PublicCharactersActions,
  getCharactersSuccess,
  getCharactersFailure,
  getCharactersDetailsSuccess,
  getCharactersDetailFailure,
  getComicsSuccess,
  getComicsFailure,
  getComicsDetailsSuccess,
  getComicsDetailFailure
};
